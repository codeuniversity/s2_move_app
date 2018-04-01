<template>
	<div>
		<div>
			<app-header></app-header>
		</div>
		<app-hamburg-ottensen></app-hamburg-ottensen>
	</div>
</template>

<script>

import Header from "./Header.vue"
import HamburgOttensen from "./maps/HamburgOttensen"


export default {
	name: "appDashboard",
	components: {
		"appHeader": Header,
		"appHamburgOttensen": HamburgOttensen
	}
}

</script>
