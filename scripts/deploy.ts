import { ethers, network } from "hardhat";

//@ts-ignore
const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

async function main() {
  const FNS = await ethers.getContractFactory("FNS", wallet);
  const fns = await FNS.deploy();
  await fns.deployed();

  console.log(`Filecoin name service deployed to ${fns.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
