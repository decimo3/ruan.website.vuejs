<template>
  <div class="mestre" id="mestre">
    <div id="esquerda" class="adsense" name="adsense-esquerda"></div>
    <div id="quadro" class="quadro">
      <logarUsuario />
    </div>
    <div id="direita" class="adsense" name="adsense-direira"></div>
  </div>
</template>
<script>
import logarUsuario from "./logarUsuario";
export default {
  components: {
    logarUsuario,
  },
};
</script>
<style scoped>
.mestre {
  width: 100%;
  height: 400px;
  background-color: lightgray;
}
.quadro {
  width: 40%;
  background-color: white;
}
.adsense {
  width: 30%;
}
</style>