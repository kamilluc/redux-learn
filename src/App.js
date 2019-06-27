import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./containers/Posts";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Posts />
    </div>
  );
}

export default App;
