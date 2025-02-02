import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LoadMoreData from "./components/load-more-data/load-more-data";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadMoreData />
  </StrictMode>
);
