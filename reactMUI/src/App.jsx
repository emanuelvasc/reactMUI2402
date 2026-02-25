import FormCadastro from "./Components/FormCadastro";
import Quantidade from "./Components/Quantidade";
import FormPreferencias from "./Components/FormPreferencias";
import FormConfiguracoes from "./Components/FormConfiguracoes";
import CadastrodeProdutos from "./Components/CadastrodeProdutos";
import ExemploUseState from "./Components/ExemploUseState";
import UseEffect from "./Components/UseEffect";
import ContadorEstoque from "./Components/ContadorEstoque";
import MonitorEstoque from "./Components/MonitorEstoque";
import CronometroSimples from "./Components/CronometroSimples";

function App() {
  return (
    <>
      <FormCadastro />
      <Quantidade />
      <FormPreferencias />
      <FormConfiguracoes />
      <CadastrodeProdutos />
      <ExemploUseState />
      <UseEffect />
      <ContadorEstoque />
      <MonitorEstoque />
      <CronometroSimples />
    </>
  );
}

export default App;
