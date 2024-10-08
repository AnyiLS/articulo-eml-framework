import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './styles/style.css'

const root: HTMLDivElement = document.getElementById('root') as HTMLDivElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);