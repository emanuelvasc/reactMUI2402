import React from "react";
import {
  Container,
  Typography,
  TextField,
  Stack,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Grid,
} from "@mui/material";

import { estadosDisponiveis } from "./Dados/estados";
import { clientesIniciais } from "./Dados/clientesIniciais";

function CadastroClientes() {
  const [nome, setNome] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [listaClientes, setListaClientes] = React.useState(clientesIniciais);

  function cadastrarCliente() {
    const novoCliente = {
      id: Math.random(),
      nome: nome,
      estado: estado,
    };

    setListaClientes([...listaClientes, novoCliente]);

    Swal.fire({
      title: "Drag me!",
      icon: "success",
      draggable: true,
    });

    setNome("");
    setEstado("");
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Cadastrar CLIENTE
            </Typography>

            <Stack spacing={2}>
              <TextField
                label="Nome do Cliente"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel>Estado</InputLabel>
                <Select
                  value={estado}
                  label="Estado"
                  onChange={(e) => setEstado(e.target.value)}
                >
                  {estadosDisponiveis.map((uf) => (
                    <MenuItem key={uf.id} value={uf.nome}>
                      {uf.nome}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Button
                variant="contained"
                onClick={cadastrarCliente}
                disabled={nome === "" || estado === ""}
              >
                Cadastro
              </Button>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography variant="h6" gutterBottom>
            Clientes cadastrados
          </Typography>

          <Paper sx={{ maxHeight: 400, overflow: "auto" }}>
            <List>
              {listaClientes.map((cliente) => (
                <React.Fragment key={cliente.id}>
                  <ListItem>
                    <ListItemText
                      primary={cliente.nome}
                      secondary={`Estado: ${cliente.estado}`}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CadastroClientes;
