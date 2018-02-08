<template>
  <div>
    <div class="search-wrapper">
      <input class="search" type="text" v-model="searchTerm" placeholder="Who are you looking for?"/>
          <label></label>
    </div>
    <div class="wrapper" v-if="isListVisible">  
      <div class="card" v-for="person in filteredList">
      <p @click="showDetails(person)"> <a href="#">{{ person.fName }} {{ person.lName }} </a> {{ person.gmailAcc }}</p>      </div>
    </div>
    <div v-if="selectedPerson">
      <img :src="selectedPerson.image"> <br>
      {{ selectedPerson.fName }} {{ selectedPerson.lName }} <br> 
      {{ selectedPerson.phone }} - {{ selectedPerson.group }}<br>
      <a :href="selectedPerson.googleCal"> Google Calendar</a> 
      <a :href="selectedPerson.wiki"> Wiki</a> 
      
    </div>  
</div>
</template>

<script>

import { get } from 'axios'

export default {
  name: 'Search',
   data: function() {
    return {
    searchTerm: '',
    personList: [],
    selectedPerson: ''  
    }   
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
      return this.filteredList.length <= 4;
    }
  },
  beforeMount() {
    this.fetchPeople();
  }
}

</script>


<style>

@media (max-width: 1280px) {
  .search {
  width: 50%;
  height: 35px;
  float: right;
  font-size: 16px;
  display: inline-block;
  }
}
@media (max-width: 1000px) {
  .search {
  width: 80%;
  height: 35px;
  margin: auto;
  font-size: 16px;
  display:inline-block;
  }
}

@media (max-width: 600px) {
  .search {
  width: 97%;
  height: 35px;
  margin-right: 4px;
  margin-left: 4px;
  display: inline-block;
  }
}


label {
  color: white;
  font-size: 40px;
  font-family: Maison;
}
.card {
  color: white;
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