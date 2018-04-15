<template>
  <div class="search">
      
<!-- SEARCH INPUT FORM -->
      <form name="myForm">
        <input v-on:submit.prevent
            autocomplete="off"
            class="search__input"
            name="mySearch"
            type="text" 
            @input="dispatchSearchTerm"
            :value="getSearchTerm"
            placeholder="Who are you looking for?"
        />
      </form>
      <!-- SEARCH RESULTS -->

      <div class="search__list" v-if="getListVisibility" > 
      <!-- CLEAR SEARCH BUTTON -->
        <img class="btn__clear-search" src="../assets/icons/close-black-icon.png" @click="resetForm"> 
      <!-- FILTERED LIST -->
        <div class="search__item" v-for="user in getFilteredUsers">
          <p><a href="#" @click="action(user)">
            <!-- display search list thumbnail -->
            <div class="search__list__thumbnail">
              <img :src="user.image">
            </div>
            <!-- display search list name-->
            <div class="search__list__name">
              {{ user.fName }} 
              {{ user.lName }}
            </div>
            <!-- display desk location -->
            <!-- MAKE FIREBASE REQUEST DEPENDING ON USER-->
            <div class="search__list__desk">
              <ul>
                <li v-if="user.deskref">{{ user.deskref.acronym }}</li>
                <li>{{ user.division }}</li>
                <li v-if="user.deskref">{{ user.deskref.building }} {{ user.deskref.level }}</li>
                <li v-else>Not checked in.</li>
              </ul>
            </div> 
            </a>
          </p>   
        </div>
      </div>         
  <!-- MENU TOGGLE BUTTON -->
    <div class="btn" @click="toggleMenu()"></div>
    <!-- NO USER FOUND -->
    <div class="search__no-user" v-if="isListEmpty">
      <p>NO USER FOUND. Retry. </p>
      <img src="https://thumbs.gfycat.com/FeistyLastingKilldeer-size_restricted.gif">
    </div>
    <!-- SELECTED USER PROFILE -->
    <slot></slot>
    <!-- CLEAR SEARCH BUTTON -->
    <img 
      v-if="Object.keys(getSelectedUser).length !== 0" 
      class="btn__clear-search" 
      id="btn__clear-search-profile" 
      src="../assets/icons/close-black-icon.png" 
      @click="resetForm"/>

  </div>

</template>


<script>

//import firebase from 'firebase';
import Menu from "./Menu.vue"
// import axios from "axios"
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
    this.fetchDesks();
    this.checkUserStatus();
    this.fetchAuthUser();
  },
  methods: {
    ...mapActions(["fetchUsers","updateTerm", "selectUser", "resetSelectedUser", "fetchFilteredUsers","fetchDesks", "checkUserStatus","fetchAuthUser"]),
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
    ...mapGetters(["getFilteredUsers", "getSelectedUser", "getUsers", "getListVisibility", "getSearchTerm","getAuthUser"]),

      isListEmpty() {
        return this.getSearchTerm.length >=2 && Object.keys(this.$store.state.filteredUsers).length == 0;
      } 
  }  
}  
</script>

<style lang="css">

@import "../../styles/css/search.component.css"

</style>

