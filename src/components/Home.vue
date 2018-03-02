<template>
  <div>
      <div class="defaultMap">
        <new-map></new-map>
     </div> 
  </div>
</template>

<script>

import NewMap from "./NewMap.vue"

export default {

  name: "home",
       components: {
            'new-map': NewMap,
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

.defaultMap {
  width: 80%;
}

</style>
