import React from "react";
import { Button, Typography, Box } from "@mui/material";

function MonitorEstoque() {
  const [quantidade, setQuantidade] = React.useState(1);

  // O VIGIA (useEffect)
  React.useEffect(() => {
    if (quantidade === 0) {
      window.Swal.fire({
        title: "Aprovado!",
        text: "O Produto foi vendido!",
        icon: "success",
        draggable: true,
      });
    }
  }, [quantidade]);

  function vender() {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Typography>Total: {quantidade}</Typography>

      <Button
        variant="contained"
        color="secondary"
        onClick={vender}
        sx={{ mt: 1 }}
      >
        Vender 1 Unidade
      </Button>
    </Box>
  );
}

export default MonitorEstoque;
