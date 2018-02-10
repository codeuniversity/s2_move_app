<template>
  <div>
    <div class="search-wrapper">
      <form name="myForm">
      <input class="search" 
          name="mySearch"
          v-model="searchTerm"
          type="text" 
          placeholder="Who are you looking for?"
        />
    </form>
    </div>
    <div class="wrapper" v-if="isListVisible">  
      <div class="card" v-for="person in filteredList">
        <p @click="showDetails(person)"> 
          <a href="#">
            {{ person.fName }} 
            {{ person.lName }} 
          </a> 
          {{ person.gmailAcc }} 
        </p>   
      </div>

    </div>
    <profile :selectedPerson="selectedPerson"></profile> 

  </div>
</body>  

</template>

<script>

import Profile from "./Profile.vue"
import { get } from 'axios'

export default {

  name: 'Search',
   data: function() {
    return {
    searchTerm: '',
    selectedPerson: { },
    personList: []
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
      catch (error) {
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
      return this.searchTerm.length >= 2;
    }
  },
  beforeMount() {
    this.fetchPeople();
  }
}

</script>

<style>

body {
  font-family: 'MaisonNeue', sans-serif;
}

input.search {
  background-color: rgb(76, 19, 209);
}
input[type=text] {
    color: white;
    margin: 8px 0;
    padding: 4px;
    font-family: 'MaisonNeue', sans-serif;
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


@media (max-width: 1280px) {
  .search {
  width: 53%;
  height: 35px;
  float: right;
  font-size: 16px;
  display: inline-block;
  margin-top: 1%;
  border: none;
  }
}
@media (min-width: 700px) {
  .search {
  width: 60%;
  height: 35px;
  float: right;
  font-size: 16px;
  display: inline-block;
  margin-top: 1%;
  }
}

@media (max-width: 650px) {
  .search {
  width: 96%;
  height: 35px;
  margin-right: 4px;
  margin-left: 4px;
  display: inline-block;
  margin-top: 1%;
  }
}  

.cardimg {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  position: relative;
  left: 30%;
}

.card {
  color: black;
}

.textinfocard {
  color: black;
}

a {
  color: white;
  background-color: rgb(248, 0, 66);
  text-decoration: none;
  border: 2px solid white;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  display: inline-block;
}


a:hover {
  text-decoration: none;
}


</style>