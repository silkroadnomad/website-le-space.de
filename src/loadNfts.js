import { ethers } from 'ethers';

import nftContractABI from './LeSpace.json'
export async function loadNFTs(providerUrl, contractAddress) {
    const nfts = []
    try {
        const provider = new ethers.JsonRpcProvider(providerUrl);
        const contract = new ethers.Contract(contractAddress, nftContractABI[0].abi, provider);
        const totalSupply = await contract.totalSupply();
        for (let i = 0; i < totalSupply; i++) {
            const tokenURI = await contract.tokenURI(i);
            nfts.push(tokenURI);
        }
    } catch (error) {
        console.error('Error loading NFTs:', error);
    }
    return nfts;
}

