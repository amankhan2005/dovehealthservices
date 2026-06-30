 import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import { SettingsProvider } from "./context/SettingsContext";  // ⭐ IMPORTANT

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    {/* ⭐⭐ PROVIDER MUST WRAP EVERYTHING ⭐⭐ */}
    <SettingsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SettingsProvider>

  </React.StrictMode>
);
