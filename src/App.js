import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick={() => {
            window.open("http://localhost:5555");
          }}
        >
          COmmunity 2
        </button>
      </header>
    </div>
  );
}

export default App;
