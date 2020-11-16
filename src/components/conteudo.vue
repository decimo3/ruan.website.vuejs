<template>
  <div class="linha" id="mestre">
    <div id="esquerda" class="coluna-2" name="adsense-esquerda"></div>
    <div id="quadro" class="coluna-8">
      <publicacoes v-if="abaAtiva === 1"/>
      <sobremim v-if="abaAtiva === 2"/>
      <meucuriculo v-if="abaAtiva === 3"/>
      <aplicativos v-if="abaAtiva === 4"/>
      <userlogin @enviarUsuario="transmitirUsuario($event)" v-if="abaAtiva === 5"/>
      <signupuser v-if="abaAtiva === 6"/>
    </div>
    <div id="direita" class="coluna-2" name="adsense-direira"></div>
  </div>
</template>
<script>
import publicacoes from "./publicacoes.vue";
import sobremim from "./sobremim.vue"
import meucuriculo from "./meucurriculo.vue";
import aplicativos from "./aplicativos.vue";
import userlogin from "./user.handler/login.user.vue"
import signupuser from "./user.handler/signup.user.vue"
export default {
  components: {
    publicacoes,
    sobremim,
    meucuriculo,
    aplicativos,
    userlogin,
    signupuser
  },
  props: {
    abaAtiva: Number,
    usuario: Object

  },
  methods: {
    transmitirUsuario: function ($event) {
      console.log("Transmitindo login para 'App.vue'")
      console.log($event.email, $event.senha)
      this.$emit("requisitarLogin", {email: $event.email, senha: $event.senha})
    }
  }
}
</script>
<style scoped>
#mestre {
  padding: 15px;
  justify-content: center;
  align-items: center;
  background-color: #616161;
}

#quadro {
  text-align: center;
  background-color: #8d8d8d;
}
</style>