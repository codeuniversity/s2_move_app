<template>
	<div class="app-header">
			<app-search></app-search>
		</div>
</template>

<script>

import Search from "./Search.vue"
import Menu from "./Menu.vue"

export default {
	name: "appHeader",
	components: {
		'appSearch': Search,
		'appMenu': Menu,
	}	
}

</script>

<style scoped>
	img {
		position: relative;
		height: 30px;
		width: 30px;
	}
	app-menu {
		position: relative;
	}

</style>
