import React from "react";
import { useState } from "react";
import logo from './logo.svg';
import useAsync from "./components/useAsync";
import { Input, Message, Button } from "semantic-ui-react";
import { unlockAccount } from "./api/web3";
import { useWeb3Context } from "./contexts/Web3";
import 'semantic-ui-css/semantic.min.css';
import Axios from 'axios';
import './App.css';

function Uploads() {

  const [filmName, setFilmName] = useState('');
  const [filmDescription, setFilmDescription] = useState('');
  const [filmCreator, setFilmCreator] = useState('');

  const addData = () => {
    Axios.post("http://localhost:3001/insert", {
      filmName: filmName,
      description: filmDescription,
      creator: filmCreator,
    });
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Film Name</h1>
        <Input 
          type="text" 
          onChange={(e) => {
            setFilmName(e.target.value);
          }}
        />
        <h1>Film Creator</h1>
        <Input 
          type="text" 
          onChange={(e) => {
            setFilmCreator(e.target.value);
          }}
        />
        <h1>Film Description</h1>
        <Input 
          type="text" 
          onChange={(e) => {
            setFilmDescription(e.target.value);
          }}
        />
        <h1></h1>
        <Button
          color="green"
          onClick={() => addData()}
        >Publish Video</Button>
      </div>
    </div>
  );
}

export default Uploads;
