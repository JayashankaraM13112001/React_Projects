import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WindowResize from "./components/window-resize/windowResize";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WindowResize />
  </StrictMode>
);
