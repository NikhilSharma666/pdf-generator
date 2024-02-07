import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SettingsProvider from "./data/context";
import "@wordpress/components/build-style/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </React.StrictMode>
);
