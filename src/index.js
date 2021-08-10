import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/OutputScreen.css";
import "./styles/CalcButton.css";
import "./styles/Board.css";
import "./styles/App.css";
import "./styles/ThemeChanger.css";

import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
