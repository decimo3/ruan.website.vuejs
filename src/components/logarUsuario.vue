<template>
  <div>
    <h2 class="shadow" style="color: #ffffff">Entre com a sua conta</h2>
    <form class="row">
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" placeholder="Seu e-mail aqui!" required />
      <br />
      <label for="senha">Senha:</label>
      <input type="password" name="senha" id="senha" placeholder="Sua senha aqui!" required />
      <br />
      <br />
      <button id="entrar" style="width: 80px; height: 30px;">Entrar</button>
      <br />
      <br />Não tem um acesso?
      <br />Que tal
      <a>criar uma conta.</a>
    </form>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>

</style>