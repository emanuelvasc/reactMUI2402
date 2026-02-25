import React from "react";

function UseEffect() {
  const [status, setStatus] = React.useState("Carregando...");

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("Sistema Pronto!");
    }, 2000);

    // limpeza (boa prática)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Status do Sistema: {status}</h1>
      <p>O vigia (useEffect) mudou o texto sozinho após 5 segundos!</p>
    </div>
  );
}

export default UseEffect;
