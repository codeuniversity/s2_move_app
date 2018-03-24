<template>
	<div class="app-header">
    <img id="s2-logo" src="../assets/images/s2-black-logo.png" alt="Sinnerschrader Logo">
    <!-- <p>MOVE</p> -->
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

