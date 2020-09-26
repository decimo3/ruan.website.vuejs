<template>
  <div class="online stats" v-if="usuario.logado === true">
    Poder {{usuario.poder()}}. Experiência: {{usuario.score}}pts. Moedas: {{usuario.moedas.gold}}G {{usuario.moedas.silver}}S {{usuario.moedas.bronze}}B
  </div>
</template>
<script>
export default {
  data() {
    return {
      usuario: {
        // mock user for test
        logado: true,
        nome: "Ruan",
        score: 13,
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
}
}
</script>

<style>

</style>