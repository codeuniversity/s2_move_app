<template>
  <div>
    <div class="search">
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
      <div class="search__list" v-if="isListVisible">  
        <div class="search__item" v-for="user in filteredList">
          <p @click="showDetails(user)"> 
            <a href="#">
              {{ user.fName }} 
              {{ user.lName }} 
            </a> 
            <p class="email"> {{ user.gmailAcc }} </p>
          </p>   
        </div>
      </div>
      <profile :selectedUser="selectedUser"></profile> 
    </div>
  </div>
</body>  

</template>

<script>

import Profile from "./Profile.vue"
import axios from "axios"


export default {

  name: 'Search',
   data() {
    return {
	    searchTerm: '',
	    selectedUser: {},
	    userList: [],
    }   
  },
  created() {
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
            // console.log(users)
          })
      .catch(error => console.log(error))
  },
  components: {
    profile: Profile
  },
  methods: {
    showDetails(user) {
      this.selectedUser = user;
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

@import "../../vendor/css/search.component.css"

</style>