# Le Space NFT-DAO Hardhat Project

This project contains the Le Space NFTs and to coming Le Space DAO.

Try running some of the following tasks:

```shell
localhost 
- npx hardhat node 
- npx hardhat run scripts/LeSpace/deploy.js --network localhost
- nft proxy contract 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512 //change in mint.js
- npx hardhat run scripts/LeSpace/mint.js --network localhost 
 
mumbai
- npx hardhat run scripts/LeSpace/deploy.js --network mumbai 
- nft proxy contract 0x779eADD5A956a1b71DdBdF2A245cBE2eA5F59048 / 0x677cB88fC19f41305Aed2b703cAFb38A99c56b4a
- check MINT-TO inside mint.js (!) 
- change contract address in mint.js
- npx hardhat run scripts/LeSpace/mint.js --network mumbai 
- npx hardhat verify --network mumbai 0x7A02B046b8bCbc693be002d04eda4ADF0182391e 

mainnet


- npx hardhat help
- npx hardhat test
- REPORT_GAS=true npx hardhat test
```
