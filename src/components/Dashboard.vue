<template>
	<div>
		<div>
			<app-header></app-header>
		</div>
			<app-profile></app-profile>
	</div>
</template>

<script>

import Header from "./Header.vue"
import Profile from "./Profile.vue"


export default {
	name: "appDashboard",
	components: {
		"appHeader": Header,
		"appProfile": Profile
	}
}

</script>
