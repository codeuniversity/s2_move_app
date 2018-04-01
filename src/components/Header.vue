<template>
	<div>
		<div>
			<app-search :action="selectUser">
				<app-profile :selectedUser="getSelectedUser"></app-profile>
			</app-search>		
		</div>
	</div>	
</template>

<script>

import Search from "./Search.vue"
import Profile from "./Profile.vue"
import { mapGetters, mapActions } from "vuex"


export default {
	name: "Header",
	components: {		
		"appSearch": Search,
		"appProfile": Profile
	},
	computed: {
		...mapGetters(["getSelectedUser"])			
	},
	methods: {
		...mapActions(["selectUser"])
	}	
}

</script>

