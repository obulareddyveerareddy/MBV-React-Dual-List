import React from "react";
import ReactDOM from "react-dom";
import ReactDualList from "./react-dual-list/react-dual-list";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container">
      <p class="text-center">
        <h1>React-Dual-List</h1>--MadeByVeera
      </p>
      <ReactDualList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
