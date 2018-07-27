<template>
  <div id="app">
    <header id="header">拉勾网</header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/footer/Footer"
export default {
  name: 'App',
  components:{Footer}
}
</script>

<style>
*{padding: 0;margin: 0;list-style: none;box-sizing: border-box}
#header {
    height: 45px;
    line-height: 45px;
    background-color: #00b38a;
    color: #fff;
    font-size: 1.8rem;
    text-align: center;
    position: relative;
}
</style>
