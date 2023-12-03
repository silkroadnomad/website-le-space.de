import hre from "hardhat";

async function main() {
  {

    let provider = hre.ethers.getDefaultProvider();
    let wallet = hre.ethers.Wallet.createRandom();
    let signer = wallet.connect(provider);
    let address = await signer.getAddress()

    const ContractFactory = await hre.ethers.getContractFactory("LeSpace");
    const instance = await hre.upgrades.deployProxy(ContractFactory,[address,address,address,address],{kind:'uups'});
    console.log(`ERgit C721 Proxy deployed to ${instance.target}`);
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
