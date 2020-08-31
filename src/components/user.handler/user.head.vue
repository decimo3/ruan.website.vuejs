<template>
  <div class="linha folder shadow">
    <div class="mensagem">Ruan Camello - {{msg}}</div>
    <form>
      <label for="email">E-mail:</label>
      <input name="email" id="email" type="email" required />
      <label for="senha">Senha:</label>
      <input name="senha" id="senha" type="password" required />
      <input type="submit" value="Entrar"/>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    msg: String,
  },
};
</script>
<style scoped>
@media only screen and (orientation: portrait) {
* {
  width: 100%;
}
}
@media only screen and (orientation: landscape) {
* {
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  flex-direction: row;
}
.mensagem {
  width: 50%;
}
form {
  width: 50%;
}
}
* {
  background-color: #bdbdbd;
  font-weight: bolder;
  color: #ffffff;
}
.folder {
  border: 2px solid black;
  padding: 1px;
}
</style>