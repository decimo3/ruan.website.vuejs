<template>
    <form class="coluna-12 cadastro">
      <h2 class="shadow">Formulário de cadastro</h2>
      <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="text" v-model=dados.nome placeholder="Nome completo" required/>
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>

    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
      <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" v-model=dados.email placeholder="Email" required/>
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
      <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="password" v-model=dados.senha placeholder="Password" reqired/>
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>

<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="number" v-model=dados.fone placeholder="Telefone" required/>
    <span class="icon is-small is-left">
      <i class="fas fa-phone"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="date" v-model=dados.data placeholder="Data de nascimento" required/>
    <span class="icon is-small is-left">
      <i class="fas fa-calendar-alt"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
      <div class="isInvalid" v-if="isInvalid.status"><strong>{{this.isInvalid.msg}}</strong></div>
      <input type="submit" class="button" @click="criarUsuario($event)"/>
    </form>
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

</style>