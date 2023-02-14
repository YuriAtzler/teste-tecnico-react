import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./page/home";
import { ItemsProvider } from "./contexts/items";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ItemsProvider>
      <Home />
    </ItemsProvider>
  </React.StrictMode>
);
