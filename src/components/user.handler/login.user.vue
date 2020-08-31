<template>
  <form class="linha cadastro">
    <h2 class="shadow">Entre com a sua conta</h2>
    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" placeholder="Seu e-mail aqui!" required />
    <br />
    <label for="senha">Senha:</label>
    <input type="password" name="senha" id="senha" placeholder="Sua senha aqui!" required />
    <br />
    <br />
    <button id="entrar" class="botão">Entrar</button>
    <br />
    <br />Não tem um acesso?
    <br />Que tal
    <a>criar uma conta.</a>
  </form>
</template>
<script>
export default {};
</script>
<style scoped>
.cadastro {
  margin-left: 25%;
  margin-right: 25%;
  border: 2px solid #000000;
  border-radius: 15px;
  background-color: #dcdcdc;
}
.botão {
  width: 80px; height: 30px;
}
</style>