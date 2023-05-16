import logo from "./logo.svg";
import "./App.css";
var Meta = require("html-metadata-parser");

function App() {
  return (
    <div className="App">
      {
        Meta.parser(
          "https://www.youtube.com/watch?v=GN2nFJ9Ku6Q",
          function (err, result) {
            console.log(result);
          }
        )
        /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
      }
    </div>
  );
}

(async () => {
  var result = await Meta.parser("https://www.youtube.com/watch?v=GN2nFJ9Ku6Q");

  console.log(JSON.stringify(result, null, 3));
})();

export default App;
