<template>
	<div>
    <div class="btn" @click="hideMenu=!hideMenu"></div>
    <app-menu
      :class="{'menu-visible':hideMenu}"
      :hideMenu="hideMenu"
      @closedMenu="hideMenu = $event" >
    </app-menu>
	</div>	
</template>

<script>

import Menu from "./Menu.vue"

export default {
	name: 'Search',
  data () {
    return {
      hideMenu: true  // hideMenu by default
    }
  },
  components: {
  "appMenu": Menu
  },
}

</script>

<style scoped>
  
img {
position: absolute;
margin: initial;
z-index: -1;
width: 30px;
height: 30px;
}

app-menu {
  position: absolute;
  float: right;
  z-index: 100;
}

div.btn {
  position: absolute;
  z-index: -1;
  width: 40px;
  height: 40px;
  background-image: url("../assets/icons/menu-black-icon.png");
}

.menu-visible {
  /*put transition here should*/ 
}


</style>
