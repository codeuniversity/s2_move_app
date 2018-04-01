<template>
	<div>
		<div>
			<app-header></app-header>
		</div>
		<app-test></app-test>
	</div>
</template>

<script>

import Header from "./Header.vue"
import Test from "./Test.vue"


export default {
	name: "appDashboard",
	components: {
		"appHeader": Header,
		"appTest": Test
	}
}

</script>
