// Self-hosted brand fonts (3G budget: only the weights we use)
import "@fontsource/playfair-display/700.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "./components/ui/Toast";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <App />
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
