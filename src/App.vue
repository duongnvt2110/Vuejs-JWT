<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header id="header">
      <Menu></Menu>
    </header>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Menu from './components/Menu'
export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  components: {
    Menu
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
</style>
