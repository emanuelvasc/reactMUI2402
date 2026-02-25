import { useState } from "react";

function ExemploUseState() {
  const [numero, setNumero] = useState(0);

  function aumentar() {
    setNumero(numero + 1);
  }

  return (
    <div>
      <h1>Contagem: {numero}</h1>
      <button onClick={aumentar}>Aumentar Número</button>
    </div>
  );
}

export default ExemploUseState;
