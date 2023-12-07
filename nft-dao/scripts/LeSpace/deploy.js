import hre from "hardhat";

async function main() {

  const ContractFactory = await hre.ethers.getContractFactory("LeSpace");
  const [deployer] = await hre.ethers.getSigners();
  const lespace = await hre.upgrades.deployProxy(ContractFactory, [deployer.address, deployer.address, deployer.address, deployer.address],
      {kind: "uups"});

  const instance = await lespace.waitForDeployment();
  console.log("instance", instance.target)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
