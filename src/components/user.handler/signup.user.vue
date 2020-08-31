<template>
  <div id="quadro" class="linha cadastro">
    <h2 class="shadow">Formulário de cadastro</h2>
    <form id="coluna-12 cadastro">
      <label for="nome">Nome Completo:</label>
      <input type="text" id="nome" name="nome" required />
      <label for="username">Login:</label>
      <input type="username" id="username" name="username" required />
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" required />
      <label for="telefone">Telefone:</label>
      <input type="telefone" id="telefone" name="telefone" required />
      <label for="senha">Senha:</label>
      <input type="password" name="senha" id="senha" required />
      <label for="datanasc">Data de nascimento:</label>
      <input type="date" id="datanasc" name="datanasc" required />
      <input type="submit" class="button" />
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.cadastro {
  border: 2px solid #000000;
  border-radius: 15px;
  background-color: #dcdcdc;
}
@media only screen and (orientation: portrait) {
  label {
    width: 100%;
    text-align: right;
  }
  input {
    width: 100%;
  }
}

@media only screen and (orientation: landscape) {
  .cadastro {
  margin-left: 25%;
  margin-right: 25%;
  }
  form {
    padding: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas: ". ." ". ." ". ." ". ." ". ." ". ." "s s";
  }
  label {
    width: 150px;
    text-align: right;
  }
  input {
    width: 150px;
    text-align: left;
  }
}
.button {
  grid-area: s;
  margin: auto;
  text-align: center;
  width: 100px;
  }
</style>