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
      <profile :selectedUser="selectedUser"></profile> 
    </div>
  </div>
</body>  

</template>

<script>

import Profile from "./Profile.vue"
import { get } from 'axios'

export default {

  name: 'Search',
   data() {
    return {
    searchTerm: '',
    selectedUser: {},
    userList: [],
    }   
  },
  components: {
    profile: Profile
  },
  methods: {
    fetchUser() {
      var self = this;
      try {
        get("https://s2-move.firebaseio.com/users.json")
        .then(function(response) {
          console.log(response)
          self.userList = response.data;
        })
        .catch(function(error) {
          console.error(error);
        });
      }
      catch(error) {
        console.error(error);
      }
    },
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
      return this.searchTerm.length >=4 && Object.keys(this.selectedUser).length == 0;
    }
  },
  beforeMount() {
    this.fetchUser();
  },
  watch: {
    searchTerm () {
      this.selectedUser = { };
    },
  }
}

</script>

<style scoped>

*, *:before, *:after {
  box-sizing: border-box;
}

body {
  font-family: 'MaisonNeue', sans-serif;
}

.search__input {
  background-color: rgb(76, 19, 209);
  color: white;
  margin: 8px 0;
  padding: 4px;
  font-family: 'MaisonNeue', sans-serif;
  font-size: 16px;
  position: absolute;
  border: none;
  width: 100%;
  height: 40px;
}
  .email {
    width: 100%;
  }

::-webkit-input-placeholder { /* Chrome/Opera/Safari */  
  color: white;
  opacity: 0.8;
  font-family: 'MaisonNeue', sans-serif;
}
::-moz-placeholder { /* Firefox 19+ */
  color: white;
  opacity: 0.8;
  font-family: 'MaisonNeue', sans-serif;
}

:-ms-input-placeholder { /* IE 10+ */
  color: white;
  opacity: 0.8;
  font-family: 'MaisonNeue', sans-serif;
}

:-moz-placeholder { /* Firefox 18- */
  color: white;
  opacity: 0.8;
  font-family: 'MaisonNeue', sans-serif;
}

.search {
  height: 35px;
  border: none;
  position: relative;
  margin-top: 1%;
  float: right;
  width: 400px;
}

@media (max-width: 650px) {
  .search {
  width: 100%;
  }
}

.search__list {
  position: absolute;
  width: 100%;
  background-color: #4502da;
  top: 50px;
  color: white;
}
.search__item {
  padding: 10px;
}

a {
  color: white;
  text-decoration: none;
  border: 2px solid white;
  padding: 10px;
  margin: 10px;
  display: inline-block;
}

a:hover {
  text-decoration: none;
  background-color: #020249 ;
}

</style>