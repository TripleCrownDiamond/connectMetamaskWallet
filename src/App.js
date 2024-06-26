import logo from './logo.svg';
import { useEffect, useState } from "react";
import { Contract, providers } from "ethers";

import './App.css';

function App() {

  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if(window.ethereum){
      setIsWalletInstalled(true);
    }
  }, [
    isWalletInstalled
  ]);

  async function connectWallet() {
    window.ethereum.request(
      {
        method: "eth_requestAccounts",
      }
    ).then((accounts) => {
      setAccount(accounts[0]);
    }).catch((error) => {
      alert("Something went wrong");
    });
  };

  if(account === null) {
    return (
      <div className='App'>
        {
          isWalletInstalled ? <button onClick={connectWallet}>Connect Wallet</button> : <p>Install MetaMask</p>
        }
      </div>
    )
  }

  return (
    <div className='App'>
      Connected as: { account }
    </div>
  )

}

export default App;
