<template>
  <div class="search" v-click-outside="resetForm">
      
<!-- SEARCH INPUT FORM -->
      <form name="myForm">
        <input v-on:submit.prevent
            autocomplete="off"
            class="search__input"
            name="mySearch"
            @input="dispatchSearchTerm"
            type="text" 
            placeholder="Who are you looking for?"
            :value="getSearchTerm"
        />
      </form>
      <div class="search__list" v-if="getListVisibility">  
        <div class="search__item" v-for="user in getFilteredUsers">
          <a href="#" @click="action(user)">
              {{ user.fName }} 
              {{ user.lName }} 
            </a> 
            <p class="email"> {{ user.gmailAcc }} </p>
        </div>
      </div>         

  <!-- MENU TOGGLE BUTTON -->
    <div class="btn" @click="toggleMenu()"></div>
      <!-- SELECTED USER PROFILE -->
    <slot></slot>
  </div>
</template>


<script>

import Menu from "./Menu.vue"
import axios from "axios"
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Search',
  components: {
    "appMenu": Menu
  },
  props: {
    action: Function
  },
  created() {
      this.fetchUsers();
  },
  methods: {
    ...mapActions(["fetchUsers","updateTerm", "selectUser", "resetSelectedUser"]),
    toggleMenu() {
      return this.$store.commit('toggleMenu');
    // refers to global menu state
    },
    dispatchSearchTerm(event) {
      this.updateTerm(event.target.value)
      this.selectUser({});
    },
    toggleMenu() {
      return this.$store.commit('toggleMenu');
    },
    resetForm() {
      this.updateTerm('')
      this.selectUser({});
     } 
  },   
  computed: {
    ...mapGetters([
      "getFilteredUsers", "getSelectedUser", "getUsers", "getListVisibility", "getSearchTerm"])
  }
}
</script>

<style lang="css">

@import "../../styles/css/search.component.css"

</style>

