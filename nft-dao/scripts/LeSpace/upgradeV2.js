import hre from "hardhat";

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Upgrading LeSpace contract...");
  const existingLeSpaceAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // replace with your deployed LeSpace contract address

  const LeSpaceV2 = await hre.ethers.getContractFactory("LeSpaceV2");
  const upgradedLeSpace = await hre.upgrades.upgradeProxy(existingLeSpaceAddress, LeSpaceV2,
      [deployer.address, deployer.address, deployer.address, deployer.address]);

  console.log("LeSpace contract upgraded with LeSpaceV2 at:", upgradedLeSpace.target);
  await upgradedLeSpace.upgradeV2()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });