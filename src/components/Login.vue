<template>
	<div>
		<app-auth></app-auth>
	</div>	
</template>

<script>

import Auth from "./Auth.vue"

export default {
	name: "login",
	components: {
		"appAuth": Auth
	}
}

</script>
