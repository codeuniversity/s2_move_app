<template>
		<div>
			<app-header></app-header>
      <!-- App menu -->
      <app-menu :class="{'menu-visible':hideMenu}"></app-menu>

		</div>
</template>

<script>

import Header from "./Header.vue"
import SearchResult from "./SearchResult.vue"
import Menu from "./Menu.vue"

export default {
	name: 'Dashboard',
  components: {
    "appHeader": Header,
    "appSearchResult": SearchResult,
    "appMenu": Menu
  },
  
  data() {
    return {
      // hideMenu: this.$store.state.hideMenu
    }
  },
  computed: {
    // refers to global state of menu
    hideMenu() { 
      return this.$store.state.hideMenu;
    }
  }
}

</script>


<style scoped>
  
.menu-visible {
  /*put transition here*/ 
}

</style>