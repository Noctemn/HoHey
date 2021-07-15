import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Uploads from './Uploads';
import Home from './Home';
import Nav from './Nav';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Provider as Web3Provider,
  Updater as Web3Updater,
} from "./contexts/Web3";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Web3Provider>
      <Nav />
      <Switch>
        <Route path="/upload" component={Uploads} />
        <Route path="/" component={Home} />
      </Switch>
      <Web3Updater />
    </Web3Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
