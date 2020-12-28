import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./components/utils/context";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <DataProvider>
        <App />
      </DataProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
