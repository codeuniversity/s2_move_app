<template>
  <div class="search">

    <!-- SEARCH INPUT FORM -->
    <form name="myForm">
      <input 
        v-on:submit.prevent 
        autocomplete="off"
        class="search__input"
        name="mySearch"
        v-model="searchTerm"
        type="text" 
        placeholder="Who are you looking for?"
        />
      </form>

    <!-- MENU TOGGLE BUTTON -->
    <div class="btn" @click="toggleMenu()"></div>

    <!-- SEARCH RESULTS -->
    <div class="search__list" v-if="isListVisible">
      <!-- CLEAR SEARCH BUTTON -->
      <img class="btn__clear-search" src="../assets/icons/close-black-icon.png" @click="clearSearch()">
      <!-- FILTERED LIST -->
      <div class="search__item" v-for="user in filteredList">
        <!-- DISPLAY SHORTENED USER INFO, ON CLICK EXTEND INFO -->
        <p @click="showDetails(user)">
          <a href="#">
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
                <li>HAM</li>
                <li>S2</li>
                <li>A-3</li>
              </ul>
            </div>
          </a> 
        </p>   
      </div>
    </div>

    <!-- NO USER FOUND -->
    <div class="search__no-user" v-if="isListEmpty">
      <p>NO USER FOUND. Retry. </p>
      <img src="https://thumbs.gfycat.com/FeistyLastingKilldeer-size_restricted.gif">
    </div>

    <!-- SELECTED USER PROFILE -->
    <app-profile :selectedUser="selectedUser"></app-profile>
    <!-- CLEAR SEARCH BUTTON -->
    <img 
      v-if="Object.keys(selectedUser).length !== 0" 
      class="btn__clear-search" 
      id="btn__clear-search-profile" 
      src="../assets/icons/close-black-icon.png" 
      @click="clearSearch()">
  </div>

</template>

<script>

import Menu from "./Menu.vue"
import Profile from "./Profile.vue"
import axios from "axios"

export default {

  name: 'Search',
   data() {
    return {
	    searchTerm: '',
	    selectedUser: {},
	    userList: [],
      deskList: []
    }
  },
  components: {
    "appMenu": Menu,
    "appProfile": Profile
  },
  created() {
    // request userList from firebase  
    axios.get("https://s2-move.firebaseio.com/users.json")
      .then(res => {
          const data = res.data
          const users = []
          for (let key in data) {
            const user = data[key]
            user.id = key
            users.push(user)
          }
          this.userList = users
          })
      // request deskList from firebase
      axios.get("https://s2-move.firebaseio.com/desks.json")
        .then(res => {
          const data = res.data
          const desks = []
          for (let key in data) {
            const desk = data[key]
            desk.id = key
            desks.push(desk)
          }
          this.deskList = desks
          })
  },
  methods: {
    showDetails(user) {
      this.selectedUser = user;
    },
    // refers to global menu state
    toggleMenu() {
      return this.$store.commit('toggleMenu');
    },
    clearSearch() {
      // document.getElementById('clearSearch').value = '';
      this.searchTerm = '';
    } 
  }, 
  computed: {
    filteredList() {
      return this.userList.filter(user => {
        var fullName = `${user.fName} ${user.lName}`;
        //search by name
        return fullName.toLowerCase().includes(this.searchTerm.toLowerCase())
        //search by email
        || user.gmailAcc.toLowerCase().includes(this.searchTerm.toLowerCase())
        // search by team
        || user.team.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
    },
    isListVisible() {
      return this.searchTerm.length >=2 && Object.keys(this.selectedUser).length == 0;
    },
    isListEmpty(){
      return this.searchTerm.length >=2 && Object.keys(this.filteredList).length == 0;
    }
  },
  watch: {
    searchTerm () {
      this.selectedUser = { };
    }
  }
}

</script>

<style lang="css">

@import "../../styles/css/search.component.css"

</style>
