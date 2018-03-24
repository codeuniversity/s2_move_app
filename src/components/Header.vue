<template>
	<div class="app-header">
		<app-search></app-search>
	</div>
</template>

<script>

import Search from "./Search.vue"

export default {
	name: "Header",
	components: {
		'appSearch': Search
	}
}
</script>

<style lang="css">

@import "../../styles/css/header.component.css"

</style>

