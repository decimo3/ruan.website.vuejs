<template>
  <div>
    <criarPublicacao />
    <div v-if="!isLoading">
      <div v-for="(depoimento, index) in depoimentos" :key="index">
        <listarPublicacao :depoimento="depoimento" />
      </div>
    </div>
  </div>
</template>
<script>
import criarPublicacao from "./post.handler/new.post.vue";
import listarPublicacao from "./post.handler/list.post.vue";
export default {
  data() {
    return {
      isLoading: true,
      depoimentos: Array
    };
  },
  components: {
    criarPublicacao,
    listarPublicacao,
  },
    created: async function () {
    const zelda = `http://localhost:3000/api/v1/publicacoes/`;
    await fetch(zelda, { method: "GET" }).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          this.depoimentos = json
          this.isLoading = false
        });
      } else {
        console.warn("Response is not OK");
      }
    });
  },
};
</script>
<style scoped>
</style>