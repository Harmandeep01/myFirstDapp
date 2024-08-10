# Ethereum React DApp

This is a React-based decentralized application (DApp) that interacts with an Ethereum smart contract on the Sepolia testnet.

## Prerequisites

- **Node.js**: Ensure Node.js is installed.
- **MetaMask**: Install the MetaMask browser extension.

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Harmandeep01/myFirstDapp/
   ```

2. **Install dependencies:** 
```
    cd mydapps
    npm install
```
3. **Deploy the Smart Contract:**
In another terminal, navigate to the directory where your smart contract is located, deploy it, and note the contract address.
```
npx hardhat run scripts/deploy.js
```

4. **Run the Application:**
In the terminal where you initialized the project, run:
```
npm start
```
The application will open in your browser.

# DApp Overview
Within this single-page application, you can use the following functions:

* Connect Wallet.
* greet(): Fetches the current greeting from the smart contract.
* changeGreet(): Updates the greeting stored in the contract.
* Send Transaction (0.001 ETH Hardcoded).
* Add Chain Function
* Change Chain Back to Sepolia Testnet

## License
This project is licensed under the [MIT](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) License.

## Author

- **Name**: Harmandeep
- **Email**: [sharmandeep954@gmail.com](sharmandeep954@gmail.com)
- **GitHub**: [https://github.com/Harmandeep01](https://github.com/Harmandeep01)
- **LinkedIn**: [https://www.linkedin.com/in/harmandeep-87032918b/](https://www.linkedin.com/in/harmandeep-87032918b/)

Feel free to reach out for any questions or collaborations!
