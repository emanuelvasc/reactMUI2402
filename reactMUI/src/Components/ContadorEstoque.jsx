import React from "react";
import { Button, Typography, Container } from "@mui/material";

function ContadorEstoque() {
  const [quantidade, setQuantidade] = React.useState(0);

  function adicionarItem() {
    setQuantidade(quantidade + 1);
  }

  function removerItem() {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    } else {
      window.Swal.fire({
        icon: "error",
        title: "Erro...",
        text: "O carrinho já está vazio!",
        footer: '<a href="#">Precisa de ajuda?</a>',
      });
    }
  }

  return (
    <Container>
      <Typography variant="h4">Itens no Carrinho: {quantidade}</Typography>

      <Button variant="contained" onClick={adicionarItem} sx={{ mr: 2 }}>
        +
      </Button>

      <Button variant="outlined" color="error" onClick={removerItem}>
        -
      </Button>
    </Container>
  );
}

export default ContadorEstoque;
