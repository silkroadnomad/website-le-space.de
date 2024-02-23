<script>
import { ProgressBar } from "carbon-components-svelte";
import { onMount } from 'svelte';
import { loadNFT, getEnv } from "../../loadNfts.js";
import { helia } from "../router.js";
import { unixfs } from "@helia/unixfs";
import { defaultEvmStores, connected, chainId, signerAddress, signer, contracts } from 'svelte-ethers-store'
import nftContractABI from "../../LeSpaceV2.json";
const urlParams = new URLSearchParams(window.location.search);

let stateLabels = [
    "connecting to IPFS System",
    "connecting to blockchain",
    "connecting to NFT contract",
    "getting tokenURI of NFT",
    "reading NFT metadata","NFT loaded"
]
let progressText
let state = 0
let loadedToken
let imageUrl;

const tokenId = urlParams.get('tokenId');
const signature = urlParams.get("signature")


const loadImage = async (cid) => {
    const fs = unixfs($helia)
    const chunks = []
    for await (const chunk of fs.cat(cid)) {
        chunks.push(chunk)
    }
    const blob = new Blob(chunks, { type: "image/jpeg" }) // adjust the type according to your image
    imageUrl = URL.createObjectURL(blob)
}
const loadToken = async () => {
    const stateCallback = (_state,_text) => {
        state = _state
        progressText = _text
    }
    loadedToken = await loadNFT($helia,tokenId,stateCallback)
    state = 5;
    loadedToken?.image && loadImage(loadedToken.image)
    console.log("loadedToken",loadedToken)
}

const claimNFT = async (_tokenId, _signature) => {
    try {
        console.log("$signerAddress",$signerAddress)
        console.log("signer",$signer)

        console.log("contracts",$contracts)
        const totalSupply = await $contracts.LeSpace.totalSupply()
        console.log("totalSupply",totalSupply)
         const tx = await $contracts.LeSpace.claimNFT(_tokenId, _signature, { gasLimit: 50000});
        console.log("Transaction sent: ", tx.hash);
        await tx.wait();
        console.log("Transaction mined");
    } catch (err) {
        console.error("Error claiming NFT: ", err);
    }
}
const connectMetamask = async () => {
    console.log("contracts",$contracts)
    const totalSupply = await $contracts.LeSpace.totalSupply()
    console.log("totalSupply",totalSupply)
}

$:{
    $helia?loadToken():null
}
onMount(() => {
    defaultEvmStores.setProvider()
    const { contractAddress } = getEnv()
    defaultEvmStores.attachContract('LeSpace', contractAddress, nftContractABI.abi)
})
</script>
<h1>Claim NFT</h1>

{#if loadedToken}
    <b>Name: {loadedToken?.name} </b> <br/>
    <b>Description: {loadedToken?.description}</b>
    {#if !$connected}
        <p>
            <button on:click={()=>connectMetamask()}>Connect Metamask in order to Claim NFT!</button>
        </p>
    {:else}
        <p>Connected to chain (id {$chainId}) with account ({$signerAddress})</p>
        <p>
            <button on:click={()=>claimNFT(tokenId,signature)}>Claim</button>
        </p>
    {/if}

    {#if imageUrl}
        <img src={imageUrl} alt="NFT Image" />
    {/if}

{:else}
    <ProgressBar helperText={stateLabels[state]+" "+progressText} status={state===5?"finished":"active"}/>
{/if}

<style>
    h1 {
        margin: 3rem;
    }
</style>