import './App.css';
import Counter from './components/Counter';
import GHBadge from './components/GHBadge';
import Toggle from './components/Toggle';
import logo from './logo.svg';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>React Quickstart</h1>
        <p>A template project deployed to GitHub Pages</p>

        <GHBadge username="MichaelCurrin" repoName="react-quickstart" />
      </header>

      <div>
        <Counter />

        <Toggle text="Dynamic text" />
        <br />
        <br />
      </div>
    </div>
  );
}
