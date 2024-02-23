import fs from "fs"
import {timeline_en} from "../../timelines.js";
import {create} from 'ipfs-http-client';

const MINT_TO = "0xC36053102a04E365867dB9554E83d60d6E305231"
// const MINT_TO = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"

// const NFT_CONTRACT_ADDRESS = "0x677cB88fC19f41305Aed2b703cAFb38A99c56b4a"
const NFT_CONTRACT_ADDRESS = "0x779eADD5A956a1b71DdBdF2A245cBE2eA5F59048"

async function main() {

    const helia = await create('http://localhost:5001') // for default IPFS installation
    let contractABI = JSON.parse(fs.readFileSync('artifacts/contracts/LeSpaceV2.sol/LeSpaceV2.json'))
    const contract = await ethers.getContractAt(contractABI.abi,NFT_CONTRACT_ADDRESS);

    for (let index = 0; index < timeline_en.length; index++) {
        const entry = timeline_en[index];
        let owner, tokenURI
        try {
           // console.log("index",index)
            owner = await contract.ownerOf(index);
            tokenURI = await contract.tokenURI(index);
            console.log(`NFT with id ${index} is already minted to owner ${owner} with URI ${tokenURI}`);
            continue;
        } catch (error) {
            console.log(`NFT with id ${index} is not minted yet `);
        }
        try {
            const artFile = fs.readFileSync(`./art/${entry.image}`);
            const artResultCid = await helia.add(artFile)
            console.log(`stored art under cid: ${artResultCid.path} `)
            const metadata = {
                name: entry.headline,
                description: entry.year+"\n"+entry.projects + "\n" +entry.technologies+"\n"+entry.industry+"\n"+entry.location,
                image: artResultCid.path,
                attributes: [
                    { "trait_type": "slug", value:entry.slug},
                    { "trait_type": "year", value: entry.year },
                    { "trait_type": "projects", value: entry.project },
                    { "trait_type": "technologies", value: entry.technologies },
                    { "trait_type": "industry", value: entry.industry },
                    { "trait_type": "location", value: entry.location }
                ],
                "creator": {
                    "name": "Le Space UG",
                    "profile_url": "ipns://le-space.de"
                },
            }

            fs.writeFileSync(`./metadata/${index}.json`, JSON.stringify(metadata));
            const metadataFile = fs.readFileSync(`./metadata/${index}.json`);
            const metadataFileCid = await helia.add(metadataFile)

            console.log("minting to cid",metadataFileCid.path)
            // Mint the NFT
            const retVal = await contract.safeMint(MINT_TO,`ipfs://${metadataFileCid.path}`)
            console.log("retVal",retVal)
            console.log(`NFT with id ${index} minted for ${MINT_TO} to ipfs://${metadataFileCid.path}`);
            console.log("restart script again to mint next nft!")
            break;
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
