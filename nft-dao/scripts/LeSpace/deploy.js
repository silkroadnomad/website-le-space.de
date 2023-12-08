import hre from "hardhat";

async function main() {

  const ContractFactory = await hre.ethers.getContractFactory("LeSpace");
  const [deployer] = await hre.ethers.getSigners();
  const lespace = await hre.upgrades.deployProxy(ContractFactory, [deployer.address, deployer.address, deployer.address, deployer.address],
      {kind: "uups"});

  const instance = await lespace.waitForDeployment();
  console.log("TODO please update contract address for mainnet/testnet hardhat ",instance.target)
  console.log("TODO - please copy ABI.json into svelte src directory ")
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
