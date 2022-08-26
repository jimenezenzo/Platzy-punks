require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { PRIVATE_KEY, RINKEBY_RPC_URL } = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
