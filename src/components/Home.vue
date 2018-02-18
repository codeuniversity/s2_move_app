<template>
  <div>
      <div class="header" >
     	<app-header></app-header>
     </div> 
    <!--   	<br> 
      	<br>
      	<br> 
      	<br>
      	<br>
        <br>
        <br> -->
      <div class="defaultMap">
          <my-map></my-map>
      </div> 
  </div>
</template>

<script>

import Header from "./Header.vue"
import Mymap from "./hamburg/MapHamburg.vue"
import Navigation from "./Navigation.vue"


export default {
	name: "home",
       components: {
            'appHeader': Header,
            'myMap': Mymap,
            'my-navigation': Navigation
        }
    }
</script>

<style scoped>


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
