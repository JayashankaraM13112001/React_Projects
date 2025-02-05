import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import QRCodeGenerator from "./components/QRCodeGenerator/qrcode";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QRCodeGenerator />
  </StrictMode>
);
