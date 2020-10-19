import React from 'react';
import logo from './logo.svg';    // importing logo.svg file and assigning it to variable logo
import './App.css';

// Attributes that are not strings or numbers need to be contained in {}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />    
        <p>
        Hello, world
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
    </div>
  );
}

export default App;
