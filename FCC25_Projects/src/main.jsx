import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TreeView from "./components/tree-view";
import menus from './components/tree-view/data.js'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TreeView menus={menus}/>
  </StrictMode>
);
