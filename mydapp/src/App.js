import React, { useState, useEffect } from "react";
import logo from "./logoHeader.png";
import "./App.css";
import { ethers } from "ethers";
import contract from "./Contract/Greeting.sol/Greeting.json";

function App() {
  const { ethereum } = window;
  const [address, setAddress] = useState("Connect Wallet");
  const [balance, setBalance] = useState("");
  const [greeting, setGreetingData] = useState("");
  // const [consoleLogStatement, setConsoleLogStatement] = useState("");

  
  // Set up the contract with a provider from Infura (for reading data)
  const contractAddress = "0xFA4ECf1a8f0dbd2A26B1Af4dfaB6693e72f8dc31";
  const infuraProvider = new ethers.JsonRpcProvider(
    "https://sepolia.infura.io/v3/bd8639b04f404de09a9bb5eb4c2aba3b"
  );

  // Set up the wallet provider using the Ethereum object from the window
  const walletProvider = new ethers.BrowserProvider(
    window.ethereum
  );

  const getContractData = new ethers.Contract(
    contractAddress,
    contract.abi,
    infuraProvider
    
  )

  const consoleLog = async () => {
    console.log(contract.abi);
    console.log(signer)
  }
  const signer = walletProvider.getSigner();
  // Set up the contract with a signer (for writing transactions)
  const sendContractTxn = new ethers.Contract(
    contractAddress,
    contract.abi,
    signer// Use the signer from the provider
  );

  useEffect(() => {
    const handleAccountsChanged = (accounts) => {
      setAddress(accounts[0]);
      getBalance(accounts[0]);
    };

    const handleChainChanged = (chainId) => {
      console.log("Chain changed to", chainId);
    };

    ethereum.on("accountsChanged", handleAccountsChanged);
    ethereum.on("chainChanged", handleChainChanged);

    return () => {
      ethereum.removeListener("accountsChanged", handleAccountsChanged);
      ethereum.removeListener("chainChanged", handleChainChanged);
    };
  }, [ethereum]);

  const getBalance = async (account) => {
    const balanceHex = await ethereum.request({
      method: "eth_getBalance",
      params: [account, "latest"],
    });
    const balanceInEther = ethers.formatEther(balanceHex);
    console.log(balanceInEther);
    setBalance(`Balance: ${balanceInEther} ETH`);
  };

  const addChain = async () => {
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0x64",
          chainName: "Gnosis",
          rpcUrls: ["https://rpc.gnosischain.com"],
          iconUrls: [
            "https://xdaichain.com/fake/example/url/xdai.svg",
            "https://xdaichain.com/fake/example/url/xdai.png",
          ],
          nativeCurrency: {
            name: "XDAI",
            symbol: "XDAI",
            decimals: 18,
          },
          blockExplorerUrls: ["https://blockscout.com/poa/xdai/"],
        },
      ],
    });
  };

  const switchChain = async () => {
    const sepoliaChainId = "0xaa36a7";
    if (window.ethereum.chainId === sepoliaChainId) {
      alert("Sepolia Testnet is already selected.");
    } else {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: sepoliaChainId }],
      });
    }
  };

  const sendTxn = async () => {
    const sepoliaChainId = '0xaa36a7';
  
    if (window.ethereum.chainId === sepoliaChainId) {
      try {
        await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [{
            to: "0xCA31cB73c443facfb299a3c99380A82695d920F6",
            from: address,  // Ensure 'address' is defined and valid
            value: '0x186A0',  // This is 100000 in hexadecimal (0.0001 ETH)
            chainId: sepoliaChainId
          }]
        });
      } catch (error) {
        console.error("Transaction failed:", error);
        alert("Transaction failed. Check the console for details.");
      }
    } else {
      alert("Please select Sepolia Testnet");
    }
  };

  const getGreeting = async () => {
    try {
      const data = await getContractData.greet();
      console.log(data);
      setGreetingData(data);
    } catch (error) {
      console.error("Failed to fetch greeting:", error);
    }
  };

  const setGreeting = async () => {
    const tx = await getContractData.changeGreet("Namaste Metacrafters!");
    
    // Wait for the transaction to be mined
    await tx.wait();
    
    console.log("Transaction successful:", tx);
    setGreetingData(tx);
  }

  const requestAccount = async () => {
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(accounts[0]);
      getBalance(accounts[0]);
    } catch (error) {
      if (error.code === -32002) {
        console.error("A request is already pending. Please check MetaMask.");
      } else {
        console.error("Failed to connect wallet:", error);
      }
    }
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" onClick={requestAccount}>
          {address}
        </a>
        <a className="App-link" onClick={requestAccount}>
          {balance}
        </a>
        <a className="App-link" onClick={addChain}>
          Add Chain
        </a>
        <a className="App-link" onClick={switchChain}>
          Switch to Sepolia Testnet Chain
        </a>
        <a className="App-link" onClick={sendTxn}>
          Send transaction
        </a>
        <a className="App-link" onClick={getGreeting}>
          Get Greeting
        </a>
        <a className="App-link">
          {greeting}
        </a>
        <a className="App-link" onClick={setGreeting}>
        Set Greeting
      </a>
        <a className="App-link" onClick={consoleLog}>
        consoleLog
      </a>
      
      </header>
     
    </div>
  );
}

export default App;
