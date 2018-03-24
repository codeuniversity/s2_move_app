<template>
	<div>
		<div>
			<app-profile></app-profile>
		</div>
	</div>
</template>

<script>

import Profile from "./Profile.vue"

export default {
	name: "SearchResult",
	components: {		
		"appProfile": Profile
	}	
}

</script>