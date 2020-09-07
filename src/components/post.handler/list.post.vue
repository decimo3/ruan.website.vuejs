<template>
  <div></div>
</template>
<script>
export default {
  methods: {
    imprimeResultado: (log) => {
      for (let index = log.length - 1; index >= 0; index--) {
        let quadro = window.document.getElementById("quadro");
        let titulo = window.document.createElement("div");
        titulo.setAttribute("name", "barraTitulo");
        titulo.setAttribute("class", "barraTitulo");
        titulo.innerText = `Titulo: ${log[index].titulo} por ${log[index].nome}`;
        quadro.appendChild(titulo);
        let depoimento = window.document.createElement("div");
        depoimento.setAttribute("name", "corpoDepoimento");
        depoimento.setAttribute("class", "corpoDepoimento");
        depoimento.innerText = `${log[index].depoimento}`;
        titulo.appendChild(depoimento);
      }
    },
    errorHandler: (message, err) => {
      console.error(message, err);
      let quadro = window.document.getElementById("quadro");
      quadro.innerHTML = message;
      quadro.style.padding = "100px";
    },
    postList: () => {
      const zelda = "http://localhost:3000/api/v1/publicacoes/";
      let body = JSON.stringify({ value: 10 });
      fetch(zelda, { method: "POST", body: body })
        .then((res) => {
          if (res.ok) {
            res.json().then((json) => {
              this.imprimeResultado(json);
            });
          } else {
            this.errorHandler("Network response was not ok", null);
          }
        })
        .catch((err) => {
          this.errorHandler("Servidor está indisponível", err);
        });
    },
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
  font-family: Arial Narrow, Arial, sans-serif;
}
.corpoDepoimento {
  color: #000000;
  background-color: #efefef;
  border: 1px solid #000000;
  padding: 15px;
}
</style>