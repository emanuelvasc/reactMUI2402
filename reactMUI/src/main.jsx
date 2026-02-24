import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FormCadastro from "./Components/FormCadastro";
import Quantidade from "./Components/Quantidade";
import FormPreferencias from "./Components/FormPreferencias";
import FormConfiguracoes from "./Components/FormConfiguracoes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormCadastro />
    <Quantidade />
    <FormPreferencias />
    <FormConfiguracoes />
  </StrictMode>,
);
