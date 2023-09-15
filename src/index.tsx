import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

import { makeServer } from "./mocks/mockserver";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
