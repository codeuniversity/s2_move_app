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
    <div class="btn" @click="toggleMenu()"></div>

<!-- SEARCH RESULT LIST -->
      <div class="search__list" v-if="isListVisible">  
        <div class="search__item" v-for="user in userList">
          <p @click="showDetails(user)"> 
            <a href="#">
              {{ user.fName }} 
              {{ user.lName }} 
            </a> 
            <p class="email"> {{ user.gmailAcc }} </p>
          </p>   
        </div>
      </div>

<!-- SELECTED USER PROFILE -->
      <app-profile :selectedUser="getSelectedUser"></app-profile>
    </div>

</template>

<script>
import Menu from "./Menu.vue"
import Profile from "./Profile.vue"
import axios from "axios"
import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'Search',
  components: {
    "appMenu": Menu,
      "appProfile": Profile
  },
  created() {
      this.fetchUsers();
  },
  methods: {
    ...mapActions(["fetchUsers","updateTerm"]),
    
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
      "ListFilteredUsers", "getSelectedUser", "getUsers"]),
    // filteredList() {
    //     return this.userList.filter(user => {
    //       var fullName = `${user.fName} ${user.lName}`;
    //         return fullName.toLowerCase().includes(this.searchTerm.toLowerCase())
    //         || user.gmailAcc.toLowerCase().includes(this.searchTerm.toLowerCase())
    //   })
    // },
    isListVisible() {
      return this.$store.dispatch('isListVisible');
    },
    // userList() {
    //   return this.$store.getters.ListFilteredUsers
    // },

  },
  watch: {
    // searchTerm () {
    //   this.selectedUser = { };
    // },
  }
}
</script>

<style lang="css">
@import "../../styles/css/search.component.css"
</style>