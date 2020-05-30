import React from 'react';
import logo from './logo.svg';
import './App.css';
import Foo from './components/Foo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, world!</h1>
        <p>Welcome to React Create App Quickstart</p>
      </header>

      <div>
        <p>
          Using the <code>Foo</code> component:
        </p>
        <Foo text="Dynamic text" />

        <br />

        <p>
          GitHub repo:{' '}
          <a
            href="https://github.com/MichaelCurrin/react-create-app-quickstart"
            target="_blank"
            rel="noopener noreferrer"
          >
            MichaelCurrin/react-create-app-quickstart
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
