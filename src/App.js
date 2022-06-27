import logo from "./logo.svg";
import "./App.css";
import ListStudent from "./components/ListStudent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListStudent />
      </header>
    </div>
  );
}

export default App;
