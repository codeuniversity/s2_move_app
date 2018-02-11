<template>
  <div id="app">

    <myappHeader></myappHeader>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h1>Find a coworker</h1>
      <div>
        <myMap></myMap>
      </div>
  </div>
</template>

<script>

import Header from "./components/Header.vue"
import Mymap from "./components/MapHamburg.vue"


export default {

        components: {
            'myappHeader': Header,
            'myMap': Mymap
        }
    }
</script>

<style>

/*@import "./style/hello.css"
*//*validation woff2 - https://caniuse.com/#feat=woff2  */
/*@font-face {
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
}*/
</style>
