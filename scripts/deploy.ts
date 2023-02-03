import { ethers } from "hardhat";

async function main() {
  const FNS = await ethers.getContractFactory("FNS");
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
