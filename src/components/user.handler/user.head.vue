<template>
  <div class="linha">
    <div class="coluna-12" v-if="usuario.logado === false">Anônimo - Para escrever um depoimento ou jogar, <a @click="mudarPagina(5)">faça login</a> ou <a @click="mudarPagina(6)">cadastre-se</a>.</div>
    <div class="coluna-12" v-if="usuario.logado === true">Seja bem vindo {{usuario.nome}}. <a>minha conta</a> - <a>sair</a></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      usuario: {
        nome: "Ruan Camello",
        logado: false
      }
    }
  },
  props: {
    // usuario: Object
  },
  methods: {
    mudarPagina: function (value) {
      this.$emit("trocarAba", value);
    },
  },
};
</script>
<style scoped>
* {
  font-weight: bolder;
  color: rgb(0, 0, 0);
  background-color: #bdbdbd;
  text-align: right;
}
a {
  text-decoration: underline;
}
</style>