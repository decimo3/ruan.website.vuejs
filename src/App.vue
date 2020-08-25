<template>
  <div id="app">
    <cabeca/>
    <rodape/>
  </div>
</template>

<script>
import cabeca from "./components/cabeca.vue"
import rodape from "./components/rodape.vue"
export default {
  name: 'App',
  components: {
    cabeca,
    rodape
  }
}
</script>

<style>

</style>
