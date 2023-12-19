// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./LeSpace.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "solidity-stringutils/strings.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
/// @custom:security-contact security@seidenwege.com
contract LeSpaceV2 is LeSpace {

    bool public wasRunning;
    using ECDSA for bytes32;
    using MessageHashUtils for bytes32;
    using strings for *;

    mapping(uint256 => string) private _tokenBaseURIs;

    function claimNFT(uint256 tokenId, bytes memory signature) public {
        require(ownerOf(tokenId) != address(0), "Token does not exist");
        require(hasRole(MINTER_ROLE, ownerOf(tokenId)), "Token already claimed");

        bytes32 hash = getMessageHash(Strings.toString(tokenId));
        bytes32 ethHash = getEthSignedMessageHash(hash);
        address signer = recoverSigner(ethHash, signature);
        require(signer != address(0), "Invalid signature");
        require(signer == ownerOf(tokenId), "Invalid signature");
        _transfer(ownerOf(tokenId), msg.sender, tokenId);
    }

    function upgradeV2() external {
        require(!wasRunning, "Upgrade was already running!");
        wasRunning = true;
    }

    // Function to set base URI for a token
    function setTokenBaseURI(uint256 tokenId, string memory baseURI) public {
        require(ownerOf(tokenId) == msg.sender, "Only the owner can set the base URI");
        _tokenBaseURIs[tokenId] = baseURI;
    }

    // Override function to return the base URI set by the owner
    function _baseURI(uint256 tokenId) internal view returns (string memory) {
        if (bytes(_tokenBaseURIs[tokenId]).length > 0) {
            return _tokenBaseURIs[tokenId];
        } else {
            return super._baseURI();
        }
    }

    // Override tokenURI function to return the custom base URI
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(ownerOf(tokenId) != address(0),"ERC721Metadata: URI query for nonexistent token");

        string memory originalURI = super.tokenURI(tokenId);
        string memory baseURI = _baseURI(tokenId);

        if (bytes(baseURI).length > 0) {
            strings.slice memory s = originalURI.toSlice();
            strings.slice memory delim = "ipfs://".toSlice();
            string memory cid = s.split(delim).toString();
            return string(abi.encodePacked(baseURI, cid));
        } else {
            return originalURI;
        }
    }

    function getMessageHash(
        string memory _message
    ) public pure returns (bytes32) {
        return keccak256(abi.encodePacked( _message));
    }

    /* 3. Sign message hash
    # using browser
    account = "copy paste account of signer here"
    ethereum.request({ method: "personal_sign", params: [account, hash]}).then(console.log)

    # using web3
    web3.personal.sign(hash, web3.eth.defaultAccount, console.log)

    Signature will be different for different accounts
    0x993dab3dd91f5c6dc28e17439be475478f5635c92a56e17e82349d3fb2f166196f466c0b4e0c146f285204f0dcb13e5ae67bc33f4b888ec32dfe0a063e8f3f781b
    */
    function getEthSignedMessageHash(
        bytes32 _messageHash
    ) public pure returns (bytes32) {
        /*
        Signature is produced by signing a keccak256 hash with the following format:
        "\x19Ethereum Signed Message\n" + len(msg) + msg
        */
        return
            keccak256(
            abi.encodePacked("\x19Ethereum Signed Message:\n32", _messageHash)
        );
    }

    /* 4. Verify signature
    signer = 0xB273216C05A8c0D4F0a4Dd0d7Bae1D2EfFE636dd
    to = 0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C
    amount = 123
    message = "coffee and donuts"
    nonce = 1
    signature =
        0x993dab3dd91f5c6dc28e17439be475478f5635c92a56e17e82349d3fb2f166196f466c0b4e0c146f285204f0dcb13e5ae67bc33f4b888ec32dfe0a063e8f3f781b
    */
    function verify(
        address _signer,
        string memory _message,
        bytes memory signature
    ) public pure returns (bool) {
        bytes32 messageHash = getMessageHash(_message);
        bytes32 ethSignedMessageHash = getEthSignedMessageHash(messageHash);
       // return  ECDSA.recover(ethSignedMessageHash, signature) == _signer;
          return recoverSigner(ethSignedMessageHash, signature) == _signer;
    }

    function recoverSigner(
        bytes32 _ethSignedMessageHash,
        bytes memory _signature
    ) public pure returns (address) {
        (bytes32 r, bytes32 s, uint8 v) = splitSignature(_signature);
        if (v < 27) {
            v += 27;
        }
        return ECDSA.recover(_ethSignedMessageHash, v, r, s);
    }

    function splitSignature(
        bytes memory sig
    ) public pure returns (bytes32 r, bytes32 s, uint8 v) {
        require(sig.length == 65, "invalid signature length");

        assembly {
        /*
        First 32 bytes stores the length of the signature

        add(sig, 32) = pointer of sig + 32
        effectively, skips first 32 bytes of signature

        mload(p) loads next 32 bytes starting at the memory address p into memory
        */

        // first 32 bytes, after the length prefix
            r := mload(add(sig, 32))
        // second 32 bytes
            s := mload(add(sig, 64))
        // final byte (first byte of the next 32 bytes)
            v := byte(0, mload(add(sig, 96)))
        }

        // implicitly return (r, s, v)
    }
}
