# Website www.le-space.de

if you have a ipfs capable browser such as Brave, you can find this website here: ipns://le-space.de 
otherwise on https://ipfs.le-space.de/ipns/le-space.de
or traditionally on https://le-space.de 

# Roadmap
- BUG/FEATURE: NFTs don't display correctly in Metamask
  - allow switching of tokenURI from ipfs to ipfs gateway per single NFT (getTokenURI should check if user want to use a dedicated nft-gateway)
  - allow tokenholder to transfer NFT and metadata to ArWeave and Update tokenURI
- Read NFTs directly from blockchain and display them in carousel & replace timelines.sh
- Create Mint-Page in Svelte using Orbit-DB
- Create optimized smaller scale image from original NFT from all Images in Carousel
- Modify NFT metadata and add 
- Setup JitsiMeet Instance (with lots of lots of CPU and RAM)
- Profile & CV App 
  - DataTable with Filter (use different AND for search e.g. IPFS AND Solidity or Libp2p and solitdy)
  - This would create a CV & resume with a cover letter that points out those skills
  - Print out CV from via a template (uploadable)
- NFTs
  - Einverständniserklärung "Connecting to p2plib network"
  - Progress-Balken "Connecting to IPFS Network" 
  - Progress-Balken "loading NFTs from Blockchain"
  - Claim NFT (transfer a token, with a signed tokenId by the owner)
  - Mint NFT (if not yet minted)
  - Animate NFTs (for next collection release)
- IPFS 
  - show connected peers
- New MenuItems
  - Le Space DAO
    - Proposals
    - Tokenomics
    - Roadmap
  - Add contact 
  - Add Project menu item and display all projects in a data table (with filter)
  - Add Skills menu item by name, icon and display all skills alphabetically, by date with filter
  - Add Locations menu item and display all work locations by name, year and project name
- Test / fix project link (with hash) to social media read out Open Graphtwitter:card twitter:title etc.
  - Javascript gets not interpreted by crawler.
  - https://discuss.ipfs.tech/t/how-to-use-ipfs-images-media-types-in-open-graph-tags/10518/3
- Modify & Enable booking calendar (coziCal)
- Offer Decentralized Address Link Subscription (with Plugin)
- Offer Subscription to Skills and Projects
- Marketing concept
- Add Terms & Conditions to Le Space UG
  - DAO and NFT concept
- Public GitHub Repo where possible
  - e.g. OrbitDB-Blog (fly in Github Icon)
  - Webanizer TB?
- Use Svelte tiles (cards) instead of carousel


- Enable "Buy on OpenSea Button"
- Integrate Social Media (X, LinkedIn)
- Print T-Shirt

# IPFS
- run ```npm run build:ipfs``` to create a new ipfs fixed build
- open the current folder e.g. ```open .```
- rename the build folder to ```dist-le-space.de-0.0.x```
- drag & drop this folder into ipfs desktop (or ipfs add)
- pin the cid 
- update dns with new cid (automate!)
- check any ipfs gateway e.g. https://ipfs.le-space.de/ipfs/QmaJNpWUqqFiP8yQzKwkvkmKPri4UXKiKa3HcejcDFebZA
- and the ipns name e.g. https://ipfs.le-space.de/ipns/le-space.de

# NFT
## folders & files
contracts
scripts
test
hardhat.config.ts

## NFT usage
- ```cd hardhat```
- ```npx hardhat node```
- ```npx hardhat console```
- deploy nft contract ```npx hardhat run scripts/LeSpace/deploy.sh```

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
