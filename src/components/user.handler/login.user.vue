<template>
  <form class="linha cadastro">
    <h2 class="shadow">Entre com a sua conta</h2>
    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" placeholder="Seu e-mail aqui!" v-model="dados.email" required />
    <br />
    <label for="senha">Senha:</label>
    <input type="password" name="senha" id="senha" placeholder="Sua senha aqui!" v-model="dados.senha" required />
    <br />
    <div class="isInvalid" v-if="isInvalid">E-mail or password is invalid!</div>
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
      isInvalid: false,
      dados: {
        email: "",
        senha: ""
      }
    }
  },
  methods: {
    validateLogin: function (login, parafrase) {
      if (this.validEmail(login)) {
        if (this.validParafrase(parafrase)) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
    validParafrase: function (senha) {
      if (senha.length < 8) {
        return false
      } else {
        return true
      }
    },
    validEmail: function (email) {
      var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    },
    logarUsuario: function ($event) {
      $event.preventDefault()
      if (this.validateLogin(this.dados.email, this.dados.senha)) {
        console.log(this.dados.email, this.dados.senha)
        this.$emit("logar", this.dados)
        this.isInvalid = false
        this.dados.email = this.dados.senha = ""
      } else {
        this.isInvalid = true
      }
    }
  } // Close methods
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
.isInvalid {
  color: #ff0000;
  padding: 5px;
  padding-top: 10px;
}
</style>