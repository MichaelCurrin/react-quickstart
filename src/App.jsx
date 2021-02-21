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
        <p>
          Using the <code>Counter</code> functional component to increment a
          numeric counter, based on{" "}
          <a href="https://reactjs.org/docs/hooks-state.html">
            Using the State Hook
          </a>{" "}
          tutorial:
        </p>

        <Counter />
      </div>

      <div>
        <p>
          Using the <code>Foo</code> class component to show and hide text:
        </p>

        <Foo text="Dynamic text" />
        <br />
        <br />
      </div>
    </div>
  );
}
