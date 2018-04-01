<template>
    <div class="search">
      
<!-- SEARCH INPUT FORM -->

      <form name="myForm">
        <input v-on:submit.prevent
            autocomplete="off"
            class="search__input"
            name="mySearch"
            @input="dispatchSearchTerm"
            type="text" 
            placeholder="Who are you looking for?"
        />
      </form>

<!-- MENU TOGGLE BUTTON -->

    <div class="btn" @click="toggleMenu"></div>

<!-- SEARCH RESULT LIST -->

      <div class="search__list" v-if="getListVisibility">  
        <div class="search__item" v-for="user in getFilteredUsers">
          <p @click="action(user)"> 
            <a href="#">
              {{ user.fName }} 
              {{ user.lName }} 
            </a> 
            <p class="email"> {{ user.gmailAcc }} </p>
          </p>   
        </div>
      </div>

<!-- SELECTED USER PROFILE -->

    <slot></slot>

    </div>

</template>

<script>
import Profile from "./Profile.vue"
import axios from "axios"
import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'Search',
  components: {
      "appProfile": Profile
  },
  props: {
    action: Function
  },
  created() {
      this.fetchUsers();
  },
  methods: {
    ...mapActions(["fetchUsers","updateTerm", "selectUser"]),
    
    showDetails(user) {
      this.selectedUser = user;
    },
    // refers to global menu state
    toggleMenu() {
      return this.$store.commit('toggleMenu');
    },
    dispatchSearchTerm(event) {
      this.updateTerm(event.target.value)
    }
   }, 
  computed: {
    ...mapGetters([
      "getFilteredUsers", "getSelectedUser", "getUsers", "getListVisibility"])
  }
}
</script>

<style lang="css">
@import "../../styles/css/search.component.css"
</style>