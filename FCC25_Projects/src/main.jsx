import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ImageSlider from "./components/image-slider/image-slider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} />
  </StrictMode>
);
