<template>
  <div class="linha folder"> <!-- folder -->
    <div class="usuario coluna-12" v-if="usuario.logado === false">Anônimo - Para escrever um depoimento ou jogar, <a @click="mudarPagina(5)">faça login</a> ou <a @click="mudarPagina(6)">cadastre-se</a>.</div>
    <div class="usuario coluna-12 logado" v-if="usuario.logado === true">Seja bem vindo {{usuario.nome}}. Poder {{usuario.poder()}} <a>minha conta</a> - <a>sair</a></div>
    <div class="usuario coluna-12 logado" v-if="usuario.logado === true">Experiência: {{usuario.score}}pts. Moedas: {{usuario.moedas.gold}}G {{usuario.moedas.silver}}S {{usuario.moedas.bronze}}B</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      usuario: {
        logado: true,
        nome: "Ruan",
        score: 3600,
        forca: 30,
        genio: 5,
        agil: 12,
        poder: function () {
          return this.forca + this.genio + this.agil
        },
        moedas: {
          gold: 5,
          silver: 30,
          bronze: 156
        }
      },
    };
  },
  props: {
    // usuario: Object,
    msg: String,
  },
  methods: {
    mudarPagina: function (value) {
      this.$emit("mudarAba", value);
    },
  },
};
</script>
<style scoped>
.logado {
  background-color: rgba(201, 201, 200, 0.418);
}
* {
  font-weight: bolder;
  color: rgb(0, 0, 0);
}
.mensagem {
    font-size: 28px;
}
@media only screen and (orientation: portrait) {
.folder {
    border: solid 2px #000000;
}
.usuario {
  width: 100%;
}
}
@media only screen and (orientation: landscape) {
  * {
    padding-left: 5px;
    padding-right: 5px;
  }
  .folder {
    border: solid 2px #000000;
    padding: 1px;
    height: 100px;
    text-align: right;
  }
  .mensagem {
    text-align: left;
  }
  .usuario {

  }
}
/* configurações gerais */
</style>