import React from "react";
import { useState } from "react";
import useAsync from "./components/useAsync";
import { Input, Message, Button } from "semantic-ui-react";
import { unlockAccount } from "./api/web3";
import { useWeb3Context } from "./contexts/Web3";
import 'semantic-ui-css/semantic.min.css';
import Axios from 'axios';
import './App.css';

function Home() {

  const {
    state: { account },
    updateAccount
  } = useWeb3Context();
  
  const { pending, error, call } = useAsync(unlockAccount);

  async function onClickConnect() {
    const { error, data } = await call(null);

    if (error) {
      console.error(error);
    }
    if (data) {
      updateAccount(data)
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Metamask</h1>
        <div>Account: {account}</div>
        <Message warning>Metamask is not connected</Message>
        <Button 
          color="blue"
          onClick={() => onClickConnect()}
          disabled={pending}
          loading={pending}
        >Connect to Metamask</Button>
      </div>
    </div>
  );
}

export default Home;
