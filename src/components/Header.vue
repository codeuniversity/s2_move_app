<template>
	<div class="app-header">
		<div>
			<app-search></app-search>
		</div>

		<h1> I am the header and I only show up together with my siblings (Profile, Search and Maps) whenever you sign in. If you don't, then you;'re not to be trusted</h1>
	</div>	
</template>

<script>

import Search from "./Search.vue"

export default {
	name: "appHeader",
	components: {
		
		"appSearch": Search

	}	
}

</script>

<style scoped>
	
	.app-header {
		position: relative;
		top: 20px;
	}

</style>
