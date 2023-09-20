// https://eth-sepolia.g.alchemy.com/v2/MmM9_-mvH7A4VUMC3ko2eOau7ZF-KmtX

require('@nomiclabs/hardhat-waffle');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/MmM9_-mvH7A4VUMC3ko2eOau7ZF-KmtX',
      accounts: [
        '815f68611d3d3902add014edd0d2efb9b638aedfbfb3088a3c8945f924967202',
      ],
    },
  },
};
