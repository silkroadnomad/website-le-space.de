import hre from "hardhat";
import { expect } from "chai";

const CLAIM_FROM = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
describe("LeSpaceV2", function () {
    it ("Should claim NFT correctly", async function () {

        //deploy proxy and contract
        const ContractFactory = await hre.ethers.getContractFactory("LeSpace");
        const [deployer] = await hre.ethers.getSigners();
        const lespace = await hre.upgrades.deployProxy(ContractFactory,
            [deployer.address, deployer.address, deployer.address, deployer.address],
            {kind: "uups"});
        const instance = await lespace.waitForDeployment();

        const existingLeSpaceAddress = instance.target
        console.log("proxy and contract deployed to ",existingLeSpaceAddress)

        const LeSpaceV2 = await hre.ethers.getContractFactory("LeSpaceV2");
        const upgradedLeSpace = await hre.upgrades.upgradeProxy(existingLeSpaceAddress, LeSpaceV2,
            [deployer.address, deployer.address, deployer.address, deployer.address]);

        console.log("LeSpace contract upgraded with LeSpaceV2 at:", upgradedLeSpace.target);
        await upgradedLeSpace.upgradeV2()

        const tokenId = 1;

        const address = await deployer.getAddress();
        await upgradedLeSpace.safeMint(address,`ipfs://`)
        await upgradedLeSpace.safeMint(address,`ipfs://cid2`)

        const [signer] = await hre.ethers.getSigners();
        const message = `${tokenId}`;
        const hash = await upgradedLeSpace.getMessageHash(message)
        const sig = await signer.signMessage(hre.ethers.getBytes(hash))

        const ethHash = await upgradedLeSpace.getEthSignedMessageHash(hash)
        // console.log("recovered signer", await upgradedLeSpace.recoverSigner(ethHash, sig))
        // const recoveredAddress = hre.ethers.recoverAddress(ethHash, sig);
        const claimFromSigner = await hre.ethers.getSigner(CLAIM_FROM);
        const upgradedLeSpaceFromClaim = upgradedLeSpace.connect(claimFromSigner);
        await upgradedLeSpaceFromClaim.claimNFT(tokenId, sig);

        expect(await upgradedLeSpace.ownerOf(tokenId)).to.equal(CLAIM_FROM)
    });
});