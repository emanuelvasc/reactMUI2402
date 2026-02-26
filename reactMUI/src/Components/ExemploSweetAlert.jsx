function ExemploSweetAlert() {
  function abrirSweetAlert() {
    window.Swal.fire({
      title: "Você tem certeza?",
      text: "Isso não pode ser revertido!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, delete!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.Swal.fire("Deletado!", "Seu arquivo foi removido.", "success");
      }
    });
  }

  return <button onClick={abrirSweetAlert}>Abrir SweetAlert</button>;
}

export default ExemploSweetAlert;
