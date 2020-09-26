<template>
  <div class="linha">
    <cabecalho @trocarAba="mudarPagina($event)" msg="Minha vida em uma página"/>
    <div class="coluna-12" id="cabeca">
      <h1 class="shadow">@RuanCamello - Minha vida em um arquivo na internet</h1>
    </div>
    <nav class="linha">
      <li :class="{'coluna-3': true, 'selected': selecionado == 1}">
        <a id="cabecaInicio" @click="mudarPagina(1)">Inicio</a>
      </li>
      <li :class="{'coluna-3': true, 'selected': selecionado == 2}">
        <a id="cabecaSobre" @click="mudarPagina(2)">Sobre mim</a>
      </li>
      <li :class="{'coluna-3': true, 'selected': selecionado == 3}">
        <a id="cabecaCurriculo" @click="mudarPagina(3)">Profissional</a>
      </li>
      <li :class="{'coluna-3': true, 'selected': selecionado == 4}">
        <a id="cabecaAplicativos" @click="mudarPagina(4)">Aplicativos</a>
      </li>
    </nav>
  </div>
</template>
<script>
import cabecalho from "./user.handler/user.head.vue"
export default {
  components: {
    cabecalho,
  },
  methods:{
    mudarPagina: function (value) {
      this.$emit("mudarAba", value)
    },
  },
      props: {
        selecionado: Number
      }
};
</script>
<style scoped>
#cabeca {
  color: #ffffff;
  text-align: center;
}
nav {
  text-align: center;
  padding: 10px;
  background-color: #bdbdbd;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 0px;
}
nav li {
  display: inline;
  text-align: center;
  background-color: #efefef;
  border-radius: 15px 15px 0px 0px;
  border-style: groove;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
}

nav li a {
  text-decoration: none;
  color: #000000;
  font-size: 22px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

nav li a:hover {
  text-transform: uppercase;
}
.selected {
  background-color: #a7a5a5;
}
</style>