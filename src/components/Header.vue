<template>
	<div>
		<div>
			<app-search></app-search>
		</div>
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

