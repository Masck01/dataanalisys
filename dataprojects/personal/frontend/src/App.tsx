import React from 'react';
import logo from './logo.svg';
import './App.css';
import Caroussel from './components/Caroussel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Reconnected
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Caroussel></Caroussel>
    </div>
  );
}

export default App;
