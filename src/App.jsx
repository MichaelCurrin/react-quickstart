import './App.css';
import Foo from './components/Foo';
import GHBadge from './components/GHBadge';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>React Quickstart</h1>
        <p>A template project hosted hosted on GH Pages</p>
      </header>

      <div>
        <p>
          Using the <code>Foo</code> component:
        </p>
        <Foo text="Dynamic text" />
        <br />

        <GHBadge />
      </div>
    </div>
  );
}

export default App;
