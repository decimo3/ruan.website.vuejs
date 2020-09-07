<template>
  <div>
    <criarPublicacao />
    <div v-if="!self.isLoading">
      <div v-for="(depoimento, index) in self.fodase" :key="index">
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
      self: this
    };
  },
  components: {
    criarPublicacao,
    listarPublicacao,
  },
    created: async () => {
    console.log("Estou sendo criado !");
    const zelda = `http://localhost:3000/api/v1/publicacoes/`;
    await fetch(zelda, { method: "GET" }).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          console.log("Fetch bem sucedido!");
          console.log(json);
          self.fodase = json
          self.isLoading = false
        });
      } else {
        console.log("Response is not OK");
      }
    });
  },
};
</script>
<style scoped>
</style>