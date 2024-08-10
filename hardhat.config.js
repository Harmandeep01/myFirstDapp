require('@nomicfoundation/hardhat-chai-matchers');
require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-ethers');

/** @type import('hardhat/config').HardhatUserConfig */
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  const provider = hre.ethers.provider;

  for (const account of accounts) {
    const address = await account.getAddress();
    const balance = await provider.getBalance(address);
    console.log(`${address} : ${hre.ethers.utils.formatEther(balance)} ETH`);
  }
});

module.exports = {
  solidity: '0.8.24',
  defaultNetwork: 'sepolia',
  networks: {
    hardhat: {},
    sepolia: {
      url: 'https://sepolia.infura.io/v3/bd8639b04f404de09a9bb5eb4c2aba3b',
      accounts: ['a946b02598da70534970983f0c20a5184f6a52d42610f4b03a8eaa9be75198fa'],
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};
