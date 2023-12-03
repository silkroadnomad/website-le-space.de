# Website www.le-space.de

if you have a ipfs capable browser such as Brave, you can find this website here: ipns://le-space.de 
otherwise on https://ipfs.le-space.de/ipns/le-space.de
or traditionally on https://le-space.de 

# Roadmap
- Use Svelte tiles (cards) instead of carousel
- Add a road map 
- Add contact
- Public GitHub Repo where possible 
  - e.g. OrbitDB-Blog (fly in Github Icon)
  - Webanizer TB? 
- Modify & Enable booking calendar (coziCal) 
- Create NFT-Contract (ERC721) for le-space on Polygon testnet
- Marketing concept
- Add Terms & Conditions to Le Space UG
  - DAO and NFT concept
- Animate NFTs
- Mint NFTs
- Enable "Buy on OpenSea Button"
- Integrate Social Media (X, LinkedIn)
- Print T-Shirt

# IPFS
- run ```npm run build-ipfs``` to create a new ipfs fixed build
- open the current folder e.g. ```open .```
- rename the build folder to ```dist-le-space.de-0.0.x```
- drag & drop this folder into ipfs desktop (or ipfs add)
- pin the cid 
- update dns with new cid
- check any ipfs gateway e.g. https://ipfs.le-space.de/ipfs/QmaJNpWUqqFiP8yQzKwkvkmKPri4UXKiKa3HcejcDFebZA
- and the ipns name e.g. https://ipfs.le-space.de/ipns/le-space.de

# NFT
## folders & files
contracts
scripts
test
hardhat.config.cjs

## NFT usage
- ```npx hardhat console```
- ``` ```

## NFT-resources
- https://www.youtube.com/watch?v=tIHrNhr_OOQ
- https://wizard.openzeppelin.com/#erc721
- https://gist.github.com/shobhitic/5421cbf31492045cf5aac2fde50d833e


## Todos
- Fix responsive for small phones
- Add more projects (e.g. OrbitDB Blog)
  - fix and cleanup OrbitDB-Blog 
  - add icons for coworking spaces (mdr-info, mdr, lvz, dnn, kreutzer,)
- play music video when fullscreen photo (how this could be integrated)
