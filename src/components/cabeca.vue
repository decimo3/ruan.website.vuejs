<template>
  <div class="linha">
    <div class="coluna-12" id="cabeca">
      <h1 class="shadow">@RuanCamello - Minha vida em um arquivo na internet</h1>
    </div>
    <nav class="linha">
      <li class="coluna-3">
        <a>Inicio</a>
      </li>
      <li class="coluna-3">
        <a>Sobre mim</a>
      </li>
      <li class="coluna-3">
        <a>Profissional</a>
      </li>
      <li class="coluna-3">
        <a>Aplicativos</a>
      </li>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#cabeca {
  color: #ffffff;
  text-align: center;
}
nav {
  text-align: center;
  padding: 10px;
  background-color: #bdbdbd;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 0px;
}
nav li {
  display: inline;
  text-align: center;
  background-color: #efefef;
  border-radius: 15px 15px 0px 0px;
  border-style: groove;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
}

nav li a {
  text-decoration: none;
  color: #000000;
  font-size: 22px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

nav li a:hover {
  text-transform: uppercase;
}
.selected {
  background-color: #a7a5a5;
}
</style>