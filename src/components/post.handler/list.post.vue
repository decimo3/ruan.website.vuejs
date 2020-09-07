<template>
  <div name="barraTitulo" class="barraTitulo">
    Título: {{depoimento.titulo}} em {{depoimento.timestamps.createdAt}}
    <div name="corpoDepoimento" class="corpoDepoimento">
      {{depoimento.depoimento}}
    </div>
    por {{depoimento.nome}}
  </div>
</template>
<script>
export default {
  props: {
    depoimento: Object
  }
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