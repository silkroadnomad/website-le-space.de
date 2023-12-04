// import { upgrades } from "hardhat";

async function main() {

  if (network.name === "hardhat") {
    console.warn(
        "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }
  const [deployer] = await ethers.getSigners();
  console.log(
      "Deploying the contracts with the account:",
      await deployer.getAddress()
  );
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const leSpaceNFTContractFactory = await ethers.getContractFactory("LeSpace")
  // const proxyInstance = await upgrades.deployProxy(leSpaceNFTContractFactory);
  // const [deployer] = await hre.ethers.getSigners();

  // console.log("Deploying contracts with the account:", deployer.address);

  // const ContractFactory = await hre.ethers.getContractFactory("LeSpace");
  // const proxyInstance = await upgrades.deployProxy(ContractFactory);
  // proxyInstance.deployed();
  // const erc721Address = proxyInstance.address
  // console.log(`ERC721 Proxy deployed to ${erc721Address}`);
  // const GovernorContractFactory = await ethers.getContractFactory("SWGovernor");
  //
  // const instance = await upgrades.deployProxy(GovernorContractFactory,[erc721Address]);
  // await instance.deployed();
  //
  // console.log(`Governor Proxy deployed to ${instance.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
