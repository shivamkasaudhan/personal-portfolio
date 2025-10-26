import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./ThemeContext";
import { Toaster } from "react-hot-toast"; // ✅ import Toaster

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      <Toaster position="top-right" reverseOrder={false} />
    </ThemeProvider>

  </React.StrictMode>
);
