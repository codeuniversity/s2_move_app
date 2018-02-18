<template>
  <div>
      <div>
      	<myappHeader></myappHeader>
      	<br> 
      	<br>
      	<br> 
      	<br>
      	<br>
      	<div>
    		<my-navigation></my-navigation>
      	</div>
        <br> 
        <br>
        <br> 
        <br>
        <br>
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
            'myappHeader': Header,
            'myMap': Mymap,
            'my-navigation': Navigation
        }
    }
</script>

<style>


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
