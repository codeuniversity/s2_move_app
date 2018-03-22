<template>
	<div>
		<div>
			<app-header></app-header>
		</div>
	</div>
</template>

<script>

import Header from "./Header.vue"
import SearchResult from "./SearchResult.vue"


export default {
	name: "appDashboard",
	components: {
		"appHeader": Header,
		"appSearchResult": SearchResult
	}
}

</script>
