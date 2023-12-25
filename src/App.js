import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            coded by Chisenga Chisulo and is{" "}
            <a
              href="https://github.com/chisengachisulo/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
