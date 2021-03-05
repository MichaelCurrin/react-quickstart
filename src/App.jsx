import "./App.css";
import Counter from "./components/Counter";
import Foo from "./components/Foo";
import GHBadge from "./components/GHBadge";
import logo from "./logo.svg";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>React Quickstart</h1>
        <p>A template project hosted hosted on GH Pages</p>

        <GHBadge username="MichaelCurrin" repoName="react-quickstart" />
      </header>

      <div>
        <Counter />

        <Foo text="Dynamic text" />
        <br />
        <br />
      </div>
    </div>
  );
}
