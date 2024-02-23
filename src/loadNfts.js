import { ethers } from 'ethers';
import { unixfs } from '@helia/unixfs'
import nftContractABI from "./LeSpaceV2.json";
import {env} from "$env/dynamic/public";

export function getEnv(){
    let providerUrl = env.PUBLIC_HARDHAT_PROVIDER_URL
    let contractAddress = env.PUBLIC_HARDHAT_CONTRACT_ADDRESS

    if(env.PUBLIC_NETWORK==='testnet'){
        providerUrl = env.PUBLIC_TESTNET_PROVIDER_URL
        contractAddress = env.PUBLIC_TESTNET_CONTRACT_ADDRESS
    }

    if(env.PUBLIC_NETWORK==='mainnet'){
        providerUrl=env.PUBLIC_MAINNET_PROVIDER_URL
        contractAddress= env.PUBLIC_MAINNET_CONTRACT_ADDRESS
    }

    return {providerUrl,contractAddress}
}
export async function loadNFT(helia, tokenId, stateCallback) {

    try {
        const { providerUrl, contractAddress } = getEnv()
        const provider = new ethers.JsonRpcProvider(providerUrl);
        stateCallback(1, providerUrl)
        const contract = new ethers.Contract(contractAddress, nftContractABI.abi, provider);
        stateCallback(2,contractAddress)
        console.log("providerUrl",providerUrl)
        const tokenURI = await contract.tokenURI(tokenId);
        stateCallback(3, tokenId)
        const metadata = await getMetadataFromIPFS(helia,tokenURI);
        stateCallback(4)
        return metadata
    } catch (error) {
        console.error('Error loading NFTs:', error);
    }
}
export async function connectMetamask(){

}
export async function loadNFTs(helia) {
    const nfts = []
    try {
        const {providerUrl,contractAddress} = getEnv()

        const provider = new ethers.JsonRpcProvider(providerUrl);
        const contract = new ethers.Contract(contractAddress, nftContractABI[0].abi, provider);
        const totalSupply = await contract.totalSupply();
        for (let i = 0; i < totalSupply; i++) {
            console.log("loading nft",i)
            const tokenURI = await contract.tokenURI(i);
            const metadata = await getMetadataFromIPFS(helia,tokenURI);
            console.log("metadata",metadata)
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