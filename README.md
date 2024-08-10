
   # React Ethereum D-App

   This React application allows users to interact with an Ethereum smart contract. It includes features to connect a wallet, view balance, and interact with the contract to fetch and update a greeting message.

   ## Setup

   ### Prerequisites

   - Node.js and npm installed.
   - MetaMask or another Ethereum wallet extension installed in your browser.

### Installation
   
  **Clone the repository:**

      ```bash
      git clone https://github.com/Harmandeep01/myFirstDapp
      cd myFirstDapp
      ```

**Install dependencies:**

      ```bash
        npm install
      ```

 **Start the development server:**
 
      ```bash
      npm start
      ```
   ## Configuration

   ### Contract Configuration

   - **Contract Address**: `Your contract address`
   - **Testnet RPC URL**: `Your RPC url`

   ### Functions

   - **requestAccount**: Connects to the user's wallet and retrieves the account address and balance.
   - **getBalance**: Fetches and displays the balance of the connected account.
   - **addChain**: Adds a new Ethereum chain to the user's wallet.
   - **switchChain**: Switches the user's wallet to the Sepolia Testnet.
   - **sendTxn**: Sends a transaction on the Sepolia Testnet.
   - **getGreeting**: Fetches the current greeting from the smart contract.
   - **setGreeting**: Updates the greeting in the smart contract.

   ## Troubleshooting

   - **MetaMask not connecting**: Ensure MetaMask is installed and properly configured.
   - **Chain switching issues**: Verify the chain IDs and RPC URLs are correct.
   - **Contract interaction errors**: Check contract address and ABI.

   ## License

   This project is licensed under the MIT License. See the [LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) file for details
