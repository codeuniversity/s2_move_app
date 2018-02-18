<template>
    <div class="myheader">
      <div>
        <img class="logo" src="../assets/images/S2logo_purple_white.png"/>
      </div>
      <div>
        <appSearch class="search"> Who are you looking for? </appSearch>
      </div>
      <div>
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
    background-color: white;
    height: 40px;
    width: 100%;
    border-bottom: 2px solid white;
    float: left;
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

</style>