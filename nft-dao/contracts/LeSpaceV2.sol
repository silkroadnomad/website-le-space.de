// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./LeSpace.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
/// @custom:security-contact security@seidenwege.com
contract LeSpaceV2 is LeSpace {

    bool public wasRunning;
    using ECDSA for bytes32;
    using MessageHashUtils for bytes32;

    function claimNFT(uint256 tokenId, bytes memory signature) public {
        require(ownerOf(tokenId) != address(0), "Token does not exist");
        require(hasRole(MINTER_ROLE, ownerOf(tokenId)), "Token already claimed");

        // Create a hash of the tokenId and recover the signer from the signature
        bytes32 hash = keccak256(abi.encodePacked(tokenId));
        require(hash.toEthSignedMessageHash().recover(signature) == ownerOf(tokenId), "Invalid signature");
        _transfer(ownerOf(tokenId),msg.sender,tokenId);
    }

    function addClaimFunction() external {
        require(!wasRunning, "Upgrade was already running!");
        wasRunning = true;
    }

}
