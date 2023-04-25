const hre = require("hardhat");
async function main() {
  const Upload = await hre.ethers.getContractFactory("Upload");
  const contract = await Upload.deploy(); //instance of contract
  await contract.deployed();

  console.log("address of contract:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
