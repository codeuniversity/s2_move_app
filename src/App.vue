<template>
  <div id="app">

    <myappHeader></myappHeader>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div>
        <my-navigation></my-navigation>
        <!-- to load the router map template -->
        <router-view></router-view>
      </div>
  </div>
</template>

<script>

import Header from "./components/Header.vue"
import Mymap from "./components/hamburg/MapHamburg.vue"
import Navigation from "./components/Navigation.vue"


export default {

        components: {
            'myappHeader': Header,
            'myMap': Mymap,
            'my-navigation': Navigation
        }
    }
</script>

<style>

@font-face {
font-family: 'MaisonNeue';
src: url('./assets/fonts/MaisonWEB-Regular.woff2') format('woff2');
font-weight: normal;
font-style: normal;
}

body {
  background-color: white;
  font-family: 'MaisonNeue', sans-serif;
}

.bodyText {
  font-size: 20px;
}

h1 {
font size: 45px;
}

</style>
