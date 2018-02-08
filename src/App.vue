<template>
  <div id="app">

      <appSearch> </appSearch>
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

<style scoped>

body {
/*  background-image: url("./assets/background.jpg");
*/
background-color:green;
}

</style>
