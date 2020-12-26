<template>
  <form class="linha cadastro">
    <h2 class="shadow">Entre com a sua conta</h2>
    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" placeholder="Seu e-mail aqui!" v-model="dados.email" required />
    <br />
    <label for="senha">Senha:</label>
    <input type="password" name="senha" id="senha" placeholder="Sua senha aqui!" v-model="dados.senha" required />
    <br />
    <div class="isInvalid" v-if="isInvalid === 1">
      E-mail ou senha inválidos!
    </div>
    <div class="isInvalid" v-if="isInvalid === 2">
      E-mail ou senha incorretos!
    </div>
    <br />
    <input type="submit" id="entrar" name="entrar" class="botão" @click="logarUsuario($event)" value="Entrar"/>
    <br />
    <br />Não tem um acesso? <br />Que tal
    <a>criar uma conta.</a>
  </form>
</template>
<script>
// import userHeadVue from './user.head.vue';
export default {
  data() {
    return {
      isInvalid: 0,
      dados: {
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    validateLogin: function (login, parafrase) {
      if (this.validEmail(login)) {
        if (this.validParafrase(parafrase)) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    },
    validParafrase: function (senha) {
      if (senha.length < 8) {
        return false;
      } else {
        return true;
      }
    },
    validEmail: function (email) {
      var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    },
    logarUsuario: async function ($event) {
      $event.preventDefault();
      if (this.validateLogin(this.dados.email, this.dados.senha)) {
        console.log(this.dados.email, this.dados.senha);
        const userData = {
          email: this.dados.email,
          senha: this.dados.senha
        }
        const user = JSON.stringify(userData);
        const zelda = `http://localhost:3000/api/v1/login/`;
        const requisicao = await fetch(zelda, { method: "POST", body: user });
        if (requisicao.status === 200) {
          var resposta = await requisicao.json();
          console.log(resposta);
          this.$usuario = this.parseJWT(resposta.token);
          this.$usuario.isLogado = true;
          console.log(this.$usuario);
          this.isInvalid = 0;
        } else if (requisicao.status === 401) {
          console.log("usuário e senha rejeitados!")
          this.isInvalid = 2;
        } else if (requisicao.status === 500){
        this.isInvalid = 1;
        }
      } 
    },
    parseJWT: function (token) {
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      return JSON.parse(jsonPayload);
    },
  }, // Close methods
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
  width: 80px;
  height: 30px;
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