const { ethers } = require("hardhat");
const { time, loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("LeSpaceV2", function () {
    it("Should claim NFT correctly", async function () {
        // Deploy the contract and get a reference to it
        const LeSpaceV2 = await ethers.getContractFactory("LeSpaceV2");
        const leSpaceV2 = await LeSpaceV2.deploy();

        // Mint a new token to an address
        const tokenId = 1;
        await leSpaceV2.mint("0xYourAddress", tokenId);

        // Generate a valid signature for the token
        const signature = "0xYourSignature";

        // Call the claimNFT function
        await leSpaceV2.claimNFT(tokenId, signature);

        // Check that the token was transferred correctly
        expect(await leSpaceV2.ownerOf(tokenId)).to.equal("0xYourAddress");
    });
});