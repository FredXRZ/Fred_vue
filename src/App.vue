<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import MHeader from './components/m-header';
  import Tab from './components/tab';
  export default {
    components:{
      MHeader,
      Tab
    }
  }
</script>

<style lang="scss">
  @import "assets/common/scss/index.scss";
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    margin: 0;
  }
  #app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
