<template>
  <div id="app">
    <meta name="referrer" content="no-referrer" />
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body{
  margin: 0;
  padding:0;
  background: #efefef;
}
a {
  text-decoration: none;
  color: #000000;
}
.router-link-active {
  text-decoration: none;
}
</style>
