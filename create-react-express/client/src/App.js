import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Saved from "./components/Saved";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header>

          </Header>
          <Search>

          </Search>
          <Saved></Saved>
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2> */}
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
