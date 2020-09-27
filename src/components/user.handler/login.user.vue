<template>
  <form class="linha cadastro">
    <h2 class="shadow">Entre com a sua conta</h2>
    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" placeholder="Seu e-mail aqui!" :value="dados.email" required />
    <br />
    <label for="senha">Senha:</label>
    <input type="password" name="senha" id="senha" placeholder="Sua senha aqui!" :value="dados.senha" required />
    <br />
    <br />
    <input type="submit" id="entrar" name="entrar" class="botão" @click="logarUsuario($event)" value="Entrar"/>
    <br />
    <br />Não tem um acesso?
    <br />Que tal
    <a>criar uma conta.</a>
  </form>
</template>
<script>
export default {
  data () {
    return {
      dados: {
        email: "dasdasdadas",
        senha: "asdadadasdas"
      }
    }
  },
  methods: {
    logarUsuario: function ($event) {
      $event.preventDefault()
      console.log("Logando usuário...")
      console.log(this.dados.email, this.dados.senha)
      this.email = this.senha = ""
    }
  }
};
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
  text-align: center;
  border: solid 1px #000000;
  border-radius: 25px;
  width: 80px; height: 30px;
}
a {
  text-decoration: underline;
}
</style>