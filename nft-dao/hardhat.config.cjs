require('@openzeppelin/hardhat-upgrades');
require('@nomicfoundation/hardhat-verify');
// require('@nomiclabs/hardhat-etherscan');
// import {HardhatUserConfig, task} from "hardhat/config";
// import "@openzeppelin/hardhat-upgrades";
// import "solidity-coverage";
// import "@nomiclabs/hardhat-etherscan";
// import fs from "fs";
// const {unixfs}  = require('@helia/unixfs');
// import { ipfs } from './ipfsSetup'
// import { timeline_en } from './timelines';
// import {unixfs} from "@helia/unixfs";
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "localhost",
  networks: {
    hardhat: {
      chainId: 31337,
      allowUnlimitedContractSize: true
    },
    localhost: {
      chainId: 31337,
      allowUnlimitedContractSize: true
    },
    mumbai: {
      // url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: `${process.env.POLYGONSCAN_API_KEY}`,
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
