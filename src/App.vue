<template>
  <div id="app">
    <cabecalho msg="Minha vida em uma página"/>
    <cabeca @mudarAba="trocarAba($event)" :selecionado="abaSelecionada"/>
    <conteudo :abaAtiva="abaSelecionada"/>
    <rodape />
  </div>
</template>

<script>
import cabecalho from "./components/user.handler/user.head.vue"
import cabeca from "./components/cabeca.vue";
import conteudo from "./components/conteudo.vue";
import rodape from "./components/rodape.vue";
export default {
  name: "App",
  data () {
    return {
      abaSelecionada: 1
    }
  },
  components: {
    cabecalho,
    cabeca,
    conteudo,
    rodape,
  },
  methods: {
    trocarAba: function ($event) {
        this.abaSelecionada = $event
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

.linha::after {
  content: "";
  clear: both;
  display: table;
}

[class*="coluna-"] {
  float: left;
  padding: 15px;
}

@media only screen and (orientation: portrait) {
  [class*="coluna-"] { width: 100%; }
}

@media only screen and (orientation: landscape) {
  .coluna-1 { width: 8.33%; }
  .coluna-2 { width: 16.66%; }
  .coluna-3 { width: 25%; }
  .coluna-4 { width: 33.33%; }
  .coluna-5 { width: 41.66%; }
  .coluna-6 { width: 50%; }
  .coluna-7 { width: 58.33%; }
  .coluna-8 { width: 66.66%; }
  .coluna-9 { width: 75%; }
  .coluna-10 { width: 83.33%; }
  .coluna-11 { width: 91.66%; }
  .coluna-12 { width: 100%; }
}
.shadow {
  text-shadow:
      0px 2px #000000,
      0px -2px #000000,
      2px 0px #000000,
      -2px 0px #000000;
    color: #ffffff;
}
</style>
