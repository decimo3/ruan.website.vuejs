<template>
  <div class="linha" id="mestre">
    <div id="esquerda" class="coluna-2" name="adsense-esquerda"></div>
    <div id="quadro" class="coluna-8">
      <publicacoes/>
    </div>
    <div id="direita" class="coluna-2" name="adsense-direira"></div>
  </div>
</template>
<script>
import publicacoes from "./publicacoes.vue";
export default {
  data() {
    return {
      aba: Number
    }
  },
  components: {
    publicacoes,
  },
};
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