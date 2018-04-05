<template>
	<div class="app-header">
    <div class="app-header__logos">
      <img id="s2-logo" src="../assets/images/s-2-logo.png" alt="Sinnerschrader Logo">
      <img id="move-logo" src="../assets/images/move-logo.png" alt="Sinnerschrader Logo">
    </div>
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

