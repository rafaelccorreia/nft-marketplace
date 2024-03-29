/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-ethers')
require('dotenv').config()

const { API_URL_KEY, PRIVATE_KEY } = process.env

module.exports = {
  solidity: '0.8.17',
  defaultNetwork: 'goerli',
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL_KEY,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
}
