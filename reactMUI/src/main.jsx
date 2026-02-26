import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import ExemploSweetAlert from "./Components/ExemploSweetAlert";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
  <ExemploSweetAlert />,
);
