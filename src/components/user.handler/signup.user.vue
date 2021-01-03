<template>
  <div id="quadro" class="linha cadastro">
    <h2 class="shadow">Formulário de cadastro</h2>
    <form id="coluna-12 cadastro">
      <label for="nome">Nome Completo:</label>
      <input type="text" id="nome" name="nome" placeholder="Seu nome aqui" v-model="dados.nome" required />
      <label for="username">Login:</label>
      <input type="username" id="username" name="username" placeholder="Nome de usuário" v-model="dados.login" required />
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" placeholder="Seu e-mail aqui" v-model="dados.email" required />
      <label for="telefone">Telefone:</label>
      <input type="telefone" id="telefone" name="telefone" placeholder="Seu telefone celular" v-model="dados.fone" required />
      <label for="senha">Senha:</label>
      <input type="password" name="senha" id="senha" placeholder="Escolha uma senha" v-model="dados.senha" required />
      <label for="datanasc">Data de nascimento:</label>
      <input type="date" id="datanasc" name="datanasc" v-model="dados.data" required />
      <div class="isInvalid" v-if="isInvalid.status"><strong>{{this.isInvalid.msg}}</strong></div>
      <input type="submit" class="button" @click="criarUsuario($event)"/>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isInvalid: {
        status: false,
        msg: ""
      },
      dados: {
        nome: "",
        login: "",
        email: "",
        fone: "",
        senha: "",
        data: "",
      },
    };
  },
  methods: {
    validateCreate: function (userData) {
      if (this.validName(userData.nome)) {
        if (this.validLogin(userData.login)) {
          if (this.validEmail(userData.email)) {
            if (this.validSenha(userData.senha)) {
              if (this.validCreateDate(userData.data)) {
                return true
              } else {
                this.isInvalid.msg = "A data informada é inválida!"
                return false
              }
            } else {
              this.isInvalid.msg = "A senha informada não é inválida!"
              return false
            }
          } else {
            this.isInvalid.msg = "Email informado é inválido!"
            return false
          }
        } else {
          this.isInvalid.msg = "Nome de usuário informado é inválido"
          return false
        }
      } else {
        this.isInvalid.msg = "O nome próprio informado é inválido"
        return false
      }
    },
    validName: function (nome) {
      var regex = /^[a-zA-Z ]{16,128}$/
      return regex.test(nome);
    },
    validLogin: function (login) {
      var regex = /^[a-z_0-9]{6,16}$/
      return regex.test(login);
    },
    validSenha: function (senha) {
      /* eslint-disable */
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,64})/;
      /*eslint-enable */
      return regex.test(senha);
    },
    validCreateDate: function (datas) {
      let data = Date.parse(datas);
      return (data < Date.now()) && (data > Date.parse("01-01-1970 00:00"))
      // TODO: Criar validação de data> não pode ser maior que a data atual e menor que 1970;
    },
    validEmail: function (email) {
      var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    },
    criarUsuario: async function ($event) {
      $event.preventDefault();
      if (this.validateCreate(this.dados)) {
        console.log(this.dados);
        const user = JSON.stringify(this.dados);
        const zelda = `http://localhost:3000/api/v1/usuario/`;
        const requisicao = await fetch(zelda, { method: "POST", body: user });
        if (requisicao.status === 200) {
          var resposta = await requisicao.json();
          console.log(resposta);
          this.$usuario = this.parseJWT(resposta.token);
          this.$usuario.isLogado = true;
          console.log(this.$usuario);
          this.isInvalid.status = false;
          alert("Usuário criado com sucesso!\nRedirecionando para login de usuário...")
        } else if (requisicao.status === 400) {
          this.isInvalid.msg = "O formulário de cadastro de usuário não está preenchido corretamente!";
          this.isInvalid.status = true;
        } else if (requisicao.status === 500){
          this.isInvalid.msg = "Erro no servidor. contacte o administrador";
          this.isInvalid.status = true;
        } else if (requisicao.status === 401) {
          this.isInvalid.msg = "Já existe cadastro para esse usuário!";
          this.isInvalid.status = true;
        } else {
          alert(`CODE: ${requisicao.status}: Mas que merda é essa que está acontecendo ?`)
        }
      } else {
        this.isInvalid.status = true;
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
  .isInvalid {
  color: #ff0000;
  padding: 5px;
  padding-top: 10px;
}
</style>