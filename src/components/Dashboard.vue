<template>
	<div>
		<div>
			<app-menu></app-menu>
			<app-header></app-header>

		</div>

			<app-profile></app-profile>
	</div>
</template>

<script>

import Header from "./Header.vue"
import Profile from "./Profile.vue"
import Menu from "./Menu.vue"


export default {
	name: 'Dashboard',
	components: {
		"appHeader": Header,
		"appProfile": Profile,
		"appMenu": Menu
	}
}

</script>
