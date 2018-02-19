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
        <div class="search__item" v-for="person in filteredList">
          <p @click="showDetails(person)"> 
            <a href="#">
              {{ person.fName }} 
              {{ person.lName }} 
            </a> 
            <p class="email"> {{ person.gmailAcc }} </p>
          </p>   
        </div>
      </div>
      <profile :selectedPerson="selectedPerson"></profile> 
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
    selectedPerson: {},
    personList: [],
    }   
  },
  components: {
    profile: Profile
  },
  methods: {
    fetchPeople() {
      var self = this;
      try {
        get("/static/data/person.json")
        .then(function(response) {
          self.personList = response.data;
        })
        .catch(function(error) {
          console.error(error);
        });
      }
      catch(error) {
        console.error(error);
      }
    },
    showDetails(person) {
      this.selectedPerson = person;
    }
   }, 
  computed: {
    filteredList() {
      return this.personList.filter(person => {
        var fullName = `${person.fName} ${person.lName}`;
        return fullName.toLowerCase().includes(this.searchTerm.toLowerCase())
        || person.gmailAcc.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
    },
    isListVisible() {
      return this.searchTerm.length >=2 && Object.keys(this.selectedPerson).length == 0;
    }
  },
  beforeMount() {
    this.fetchPeople();
  },
  watch: {
    searchTerm () {
      this.selectedPerson = { };
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
  width: 90%;
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