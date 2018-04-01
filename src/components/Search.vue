<template>
    <div class="search">
      
<!-- SEARCH INPUT FORM -->
      <form name="myForm">
        <input v-on:submit.prevent
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

<!-- SEARCH RESULT LIST -->
      <div class="search__list" v-if="isListVisible">  
        <div class="search__item" v-for="user in filteredList">
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

<!-- SELECTED USER PROFILE -->
      <app-profile :selectedUser="selectedUser"></app-profile>
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
	    userList: []
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
  },
  methods: {
    showDetails(user) {
      this.selectedUser = user;
    },
    // refers to global menu state
    toggleMenu() {
      return this.$store.commit('toggleMenu');
    }  
   }, 
  computed: {
    filteredList() {
      	return this.userList.filter(user => {
          var fullName = `${user.fName} ${user.lName}`;
            return fullName.toLowerCase().includes(this.searchTerm.toLowerCase())
            || user.gmailAcc.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
    },
    isListVisible() {
      return this.searchTerm.length >=2 && Object.keys(this.selectedUser).length == 0;
    }
  },
  watch: {
    searchTerm () {
      this.selectedUser = { };
    },
  }
}

</script>

<style lang="css">

@import "../../styles/css/search.component.css"

</style>
