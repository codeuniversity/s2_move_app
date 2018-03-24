<template>
	<div>
		<div>
			<app-header></app-header>
			<!-- <app-search-result></app-search-result> -->
		</div>
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
