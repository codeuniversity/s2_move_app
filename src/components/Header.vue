<template>
	<div class="app-header">
    <div class="app-header__logos">
      <img id="s2-logo" src="../../static/images/s-2-logo.png" alt="Sinnerschrader Logo">
      <img id="move-logo" src="../../static/images/move-logo.png" alt="Sinnerschrader Logo">
    </div>
		<app-search :action="selectUser">
				<app-profile :selectedUser="getSelectedUser"></app-profile>
		</app-search>
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

<style lang="css">

@import "../../styles/css/header.component.css"

</style>

