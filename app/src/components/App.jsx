import React from 'react';

import { Avatar, Chip } from '@material-ui/core';
import Menu from './Menu.jsx';

import logo from '../styles/images/logo.png'
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-body">
        <Menu />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
