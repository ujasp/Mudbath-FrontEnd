import "./App.css";
import Header from "./Header.js";
import Display from "./Display.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";

class App extends Component {
  state = {
    currency: "USD",
  };
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Display></Display>
      </div>
    );
  }
}

export default App;
