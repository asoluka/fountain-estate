import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./theme";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
