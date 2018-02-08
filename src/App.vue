<template>
  <div id="app">

      <appSearch class="search"> hello </appSearch>
    </div>  
</div>
</template>

<script>

import Search from "./components/Search.vue"

export default {

        data () {
            return {            
        }
      },
        components: {
            appSearch: Search
        }
    }
</script>

<style>

body {
/*  background-image: url("./assets/background.jpg");
*/
background-color:rgb(76, 19, 209);
font-family: Maison;
}


</style>
