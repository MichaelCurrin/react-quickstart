import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, world!</h1>
        <p>
          GitHub repo:{' '}
          <a
            className="App-link"
            href="https://github.com/MichaelCurrin/react-create-app-quickstart"
            target="_blank"
            rel="noopener noreferrer"
          >
            MichaelCurrin/react-create-app-quickstart
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
