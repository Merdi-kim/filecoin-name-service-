import { expect } from "chai";
import { ethers } from "hardhat";
import { FNS } from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
var namehash = require('eth-ens-namehash')


describe('File name system', () => {

  let contract:FNS
  let users:SignerWithAddress[]
  const nameHash = namehash.hash('foo.eth')

  async function deployContract() {
    const FnsContract = await ethers.getContractFactory('FNS')
    const [deployer, user1, user2, user3, user4 ] = await ethers.getSigners()
    users = [deployer, user1, user2, user3, user4]
    const fns = await FnsContract.connect(deployer).deploy()
    await fns.deployed()
    contract = fns
    const { address } = fns
    return { address }
  }

  it('should deploy the contract successfully', async() => {
    const { address } = await deployContract()
    expect(address).not.equal(ethers.constants.AddressZero)
  })

  describe('FNS interactions:REGISTER NAME', () => {
    it('should fail to create a new name ', async() => {
      await expect(contract.registerName(nameHash, false, 360)).to.be.revertedWith('Add ttl')
    })

    it('should create a new name', async() => {
      await expect(contract.registerName(nameHash, false, 366)).to.be.fulfilled
    })

    it('should fail to create a new name with same nameHash', async() => {
      await expect(contract.registerName(nameHash, false, 366)).to.be.revertedWith('Name already owned')
    })
  })

  describe('FNS interactions:CHECK NAME', () => {
    it('should check for a name\'s information and return ZERO values', async() => {
      const Namehash = namehash.hash('fooooo.eth')
      const emptyResponse = 
      {
        owner: ethers.constants.AddressZero,
        secondController: ethers.constants.AddressZero,
        isValidator: false,
        ttl: ethers.utils.parseUnits('0')
      }
      const info = await contract.checkName(Namehash)
      const arrangedInfo = {...info}
      const slicedInfo = Object.fromEntries(
        Object.entries(arrangedInfo).slice(4)
      )
      expect(arrangedInfo).to.deep.include(emptyResponse)
    })
  })

  describe('FNS interactions:SET NEW OWNER', () => {
    it('should fail to set new owner, name not registered', async() => {
      const Namehash = namehash.hash('fee.eth')
      await expect(contract.setNewOwner(Namehash, users[1].address)).to.be.rejectedWith('Not allowed')
    })
    it('should fail to set new owner, caller not owner', async() => {
      await expect(contract.connect(users[1]).setNewOwner(nameHash, users[2].address)).to.be.rejectedWith('Not allowed')
    })
    
    it('should set new owner of the name', async() => {
      await expect(contract.setNewOwner(nameHash, users[3].address)).to.be.fulfilled 
    })
  })

  describe('FNS interactions:SET SECOND CONTROLLER', () => {
    it('should fail to set second controller, name not registered', async() => {
      const Namehash = namehash.hash('fee.eth')
      await expect(contract.setSecondController(Namehash, users[2].address)).to.be.rejectedWith('Name not owned')
    })
    it('should fail to set second controller, caller not owner', async() => {
      await expect(contract.connect(users[1]).setSecondController(nameHash, users[2].address)).to.be.rejectedWith('Not allowed')
    })

    //This works because the caller is the old secondController of the account
    it('should set second controller of the name', async() => {
      await expect(contract.setSecondController(nameHash, users[1].address)).to.be.fulfilled
    })
  })

  describe('FNS interactions:ADD time to live for name', () => {
    it('should fail to increase ttl, name not registered', async() => {
      const Namehash = namehash.hash('fee.eth')
      await expect(contract.addTtl(Namehash, 367)).to.be.rejectedWith('Name not owned')
    })
    it('should fail to increase ttl, caller not owner', async() => {
      await expect(contract.connect(users[2]).addTtl(nameHash, 367)).to.be.rejectedWith('Not allowed')
    })
    it('should fail to increase ttl, ttl smaller than min ttl', async() => {
      await expect(contract.connect(users[3]).addTtl(nameHash, 360)).to.be.revertedWith('increase ttl')
    })
    it('should increase ttl of the name', async() => {
      await expect(contract.connect(users[3]).addTtl(nameHash, 370)).to.be.fulfilled
    })
  })

  describe('FNS interactions:GET ADDRESS ASSOCATED TO NAME', () => {
    const Namehash = namehash.hash('fee.eth')
    it('should fail to fetch address', async() => {
      await expect(contract.getNameAddress(Namehash)).to.be.revertedWith('Not registered')
    })
    it('should fetch address', async() => {
      await expect(contract.getNameAddress(nameHash)).to.be.fulfilled
    })
  })
}) 