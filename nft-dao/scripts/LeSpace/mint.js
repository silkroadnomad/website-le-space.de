import fs from "fs"
import {timeline_en} from "../../timelines.js";
import {create} from 'ipfs-http-client';

const MINT_TO = "0xC36053102a04E365867dB9554E83d60d6E305231"
// const MINT_TO = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"

const NFT_CONTRACT_ADDRESS = "0x677cB88fC19f41305Aed2b703cAFb38A99c56b4a"
async function main() {

    const helia = await create('http://localhost:5001') // for default IPFS installation
    let contractABI = JSON.parse(fs.readFileSync('./artifacts/contracts/LeSpace.sol/LeSpace.json'))
    const contract = await ethers.getContractAt(contractABI.abi,NFT_CONTRACT_ADDRESS);

    for (let index = 0; index < timeline_en.length; index++) {
        const entry = timeline_en[index];

        try {
            let owner = await contract.ownerOf(index);
            let tokenURI = await contract.tokenURI(index);
            console.log(`NFT with id ${index} is already minted to owner ${owner} with URI ${tokenURI}`);
            continue;
        } catch (error) {
            console.log(`NFT with id ${index} is not minted yet`);
        }

        try {
            const artFile = fs.readFileSync(`./art/${entry.image}`);
            const artResultCid = await helia.add(artFile)
            console.log(`stored art under cid: ${artResultCid.path} `)
            const metadata = {
                name: entry.headline,
                description: entry.projects,
                image: artResultCid.path, //here we need the cid (so before
            };

            console.log("metadata",metadata)
            fs.writeFileSync(`./metadata/${index}.json`, JSON.stringify(metadata));
            const metadataFile = fs.readFileSync(`./metadata/${index}.json`);
            const metadataFileCid = await helia.add(metadataFile)

            console.log("minting to cid",metadataFileCid.path)
            // Mint the NFT
            await contract.safeMint(MINT_TO,`ipfs://${metadataFileCid.path}`)
            console.log(`NFT with id ${index} minted for ${MINT_TO} to ipfs://${metadataFileCid.path}`);
        } catch (error) {
            if (error.code === 'ENOENT') {
                console.error(`File not found: ./art/${entry.image}`);
            } else {
                throw error;
            }
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
