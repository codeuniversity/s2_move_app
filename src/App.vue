<template>
  <div id="app">  
	<router-view> </router-view>
  </div>
</template>

<script>

import Dashboard from "./components/Dashboard.vue"

export default {
  name: 'App',
  components: {
  	"appDashboard": Dashboard
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

.body__text {
  font-size: 20px;
}
.header {
  margin-top: 180px;
}
h1 {
font size: 45px;
}

</style>
