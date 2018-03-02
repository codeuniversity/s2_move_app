<template>
  <div>
    <div class="myheader">
      <div>
        <img class="logo" src="../assets/images/S2logo_purple_white.png"/>
      </div>
      <div>
        <appSearch class="search"> Who are you looking for? </appSearch>
      </div>
    </div>  
    <br>    
      <div class="nav">
        <nav-bar></nav-bar>
      </div>        
  </div>
</template>

<script>
import Search from './Search.vue'
import Navigation from "./Navigation.vue"

export default {
  name: 'Header',
  components: {
    'appSearch': Search,
    "nav-bar": Navigation 
  }
}
</script>

<style scoped>

  .myheader {
    height: 40px;
    width: 100%;
    position: fixed;
    z-index: 100;
    margin-top:-80px;
  }
  .logo { 
      height: 80px;
      position: absolute;
      z-index: 1;
  }
 
  @media (max-width: 650px) {
    .logo {
      display: none;
    }
  }

  .search {
    float: right;
  }

  .nav {
    margin-top: -150px;
  }

</style>