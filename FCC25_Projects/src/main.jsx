import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LightDarkMode from "./components/light-dark-mode";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LightDarkMode />
  </StrictMode>
);
