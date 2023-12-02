import { ethers, upgrades } from "hardhat";

async function main() {
  {

    let provider = ethers.getDefaultProvider();
    let wallet = ethers.Wallet.createRandom();
    let signer = wallet.connect(provider);
    let address = signer.getAddress()
    const ContractFactory = await ethers.getContractFactory("LeSpace");
    const instance = await upgrades.deployProxy(ContractFactory,[address,address,address,address]);
    await instance.deployed();

    console.log(`ERC721 Proxy deployed to ${instance.address}`);
  }
  // {
  //   const ContractFactory = await ethers.getContractFactory("LeSpace");
  //
  //   const instance = await upgrades.deployProxy(ContractFactory);
  //   await instance.deployed();
  //
  //   console.log(`Governor Proxy deployed to ${instance.address}`);
  // }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
