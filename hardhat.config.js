require('@nomiclabs/hardhat-ethers');
require('dotenv').config()

const ALCHEMY_API_KEY = "2E5JSY4tDuphYs7aIzcNzpy4fz7qCDLf";
const GOERLI_PRIVATE_KEY = process.env.PRIVATE_KEY;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
