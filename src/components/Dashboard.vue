<template>
		<div>
			<app-header></app-header>
		</div>
</template>

<script>

import Header from "./Header.vue"
import SearchResult from "./SearchResult.vue"

export default {
	name: 'Dashboard',
	components: {
		"appHeader": Header,
		"appSearchResult": SearchResult
	}
}

</script>
