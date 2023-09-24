import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Main from "./main";
import "./index.css";
import "@/assets/scss/main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);
