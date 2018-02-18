<template>
  <div id="app">
    
    <router-view></router-view>
      
  </div>
</template>

<script>

// import Header from "./components/Header.vue"
// import Navigation from "./components/Navigation.vue"
export default {
  name: 'App',
  components: {
      // "myappHeader" : Header,
      // "my-navigation": Navigation  
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
