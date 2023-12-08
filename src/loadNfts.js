import { ethers } from 'ethers';
import { unixfs } from '@helia/unixfs'
import nftContractABI from './LeSpace.json'
export async function loadNFTs(helia ,providerUrl, contractAddress) {
    const nfts = []
    try {
        const provider = new ethers.JsonRpcProvider(providerUrl);
        const contract = new ethers.Contract(contractAddress, nftContractABI[0].abi, provider);
        const totalSupply = await contract.totalSupply();
        for (let i = 0; i < totalSupply; i++) {
            const tokenURI = await contract.tokenURI(i);
            const metadata = await getMetadataFromIPFS(helia,tokenURI);
            nfts.push(metadata);
        }
    } catch (error) {
        console.error('Error loading NFTs:', error);
    }
    return nfts;
}

async function getMetadataFromIPFS(helia, tokenURI) {
    const fs = unixfs(helia)
    const decoder = new TextDecoder()
    let text = ''
    let cid
    if (tokenURI.startsWith('ipfs://') || tokenURI.startsWith('ipns://')) {
        cid = tokenURI.split('//')[1];
    }
    for await (const chunk of fs.cat(cid)) {
        text += decoder.decode(chunk, {
            stream: true
        })
    }

    return JSON.parse(text);
}