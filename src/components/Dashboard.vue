<template>
		<div class="dashboard">
      <!-- App menu -->
      <app-menu :class="{'menu-visible':hideMenu}"></app-menu>
			<app-header></app-header>
      <app-hamburg-ottensen></app-hamburg-ottensen>

		</div>

</template>

<script>

import Header from "./Header.vue"
import HamburgOttensen from "./maps/HamburgOttensen"
import Menu from "./Menu.vue"



export default {
	name: "appDashboard",
	components: {
		"appHeader": Header,
		"appHamburgOttensen": HamburgOttensen,
    "appMenu": Menu
	},
   computed: {
    // refers to global state of menu
    hideMenu() { 
      return this.$store.state.hideMenu;
    }
  }
}  

</script>

<style lang="css">

@import "../../styles/css/dashboard.component.css"

</style>
