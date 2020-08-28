<template>
  <div id="app">
    <cabeca />
    <!--  <conteudo /> -->
    <rodape />
  </div>
</template>

<script>
import cabeca from "./components/cabeca.vue";
// import conteudo from "./components/conteudo.vue";
import rodape from "./components/rodape.vue";
export default {
  name: "App",
  components: {
    cabeca,
    // conteudo,
    rodape,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

.linha::after {
  content: "";
  clear: both;
  display: table;
}

[class*="coluna-"] {
  float: left;
  padding: 15px;
}

@media only screen and (orientation: portrait) {
  [class*="coluna-"] {
    width: 100%;
  }
}

@media only screen and (orientation: landscape) {
  .coluna-1 {
    width: 8.33%;
  }
  .coluna-2 {
    width: 16.66%;
  }
  .coluna-3 {
    width: 25%;
  }
  .coluna-4 {
    width: 33.33%;
  }
  .coluna-5 {
    width: 41.66%;
  }
  .coluna-6 {
    width: 50%;
  }
  .coluna-7 {
    width: 58.33%;
  }
  .coluna-8 {
    width: 66.66%;
  }
  .coluna-9 {
    width: 75%;
  }
  .coluna-10 {
    width: 83.33%;
  }
  .coluna-11 {
    width: 91.66%;
  }
  .coluna-12 {
    width: 100%;
  }
}
.shadow {
  text-shadow: 0px 2px #000000, 0px -2px #000000, 2px 0px #000000,
    -2px 0px #000000;
}

#mestre {
  padding: 15px;
  justify-content: center;
  align-items: center;
  background-color: #616161;
}

#quadro {
  padding: 15px;
  text-align: center;
  background-color: #8d8d8d;
}

/*
.barraTitulo label {
    width: 30%;
}
.barraTitulo input {
    width: 70%;
}
.barraTitulo {
    color: #ffffff;
    background-color: #707070;
    font-size: larger;
    border: 1px solid #000000;
    padding: 15px;
    font-family: Arial Narrow,Arial,sans-serif; 
}
.corpoDepoimento {
    color: #000000;
    background-color: #efefef;
    border: 1px solid #000000;
    padding: 15px;
}
#form label {
    text-align: right;
}
#form input {
    text-align: left;
}
.cadastro {
	margin: auto;
  border: 1px solid #000000;
	border-radius: 15px;
	background-color: #dcdcdc;
}*/
</style>
