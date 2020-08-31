<template>
  <form id="criarDepoimento" name="criarDepoimento">
    <div id="barraTitulo" class="barraTitulo">
      <label for="txtNome">Nome:</label>
      <input id="txtNome" name="txtNome" type="text" placeholder="Coloque seu nome aqui" required><br>
      <label for="txtTitulo">Título:</label>
      <input id="txtTitulo" name="txtTitulo" type="text" placeholder="Título do depoimento" required>
      <div id="corpoDepoimento" class="corpoDepoimento">
        <label for="txtDepoimento">Depoimento:</label>
        <input id="txtDepoimento" name="txtDepoimento" type="text" placeholder="Escreva o seu depoimento aqui" class="corpoDepoimento" required>
      </div>
      <input type="submit" onclick="enviarDepoimento()">
    </div>
      </form>
</template>
<script>
export default {
  newPost() {
    async function requestPostPublicações() {
      let txtNome = window.document.getElementById("txtNome");
      let txtTitulo = window.document.getElementById("txtTitulo");
      let txtDepoimento = window.document.getElementById("txtDepoimento");
      txtNome.value = txtTitulo.value = txtDepoimento.value = "";
      const form = {
        nome: txtNome.value,
        titulo: txtTitulo.value,
        depoimento: txtDepoimento.value,
      };
      await fetch(URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ form }),
      });
    }
    requestPostPublicações();
  },
};
</script>
<style scoped>
.barraTitulo label {
    width: 30%;
}
.barraTitulo input {
    width: 70%;
}
.barraTitulo {
    color: #ffffff;
    background-color: #707070;
    font-size: larger;
    border: 1px solid #000000;
    padding: 15px;
    font-family: Arial Narrow,Arial,sans-serif; 
}
.corpoDepoimento {
    color: #000000;
    background-color: #efefef;
    border: 1px solid #000000;
    padding: 15px;
}
</style>