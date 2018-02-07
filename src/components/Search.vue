<template>
  <div id="app">
    <div class="search-wrapper">
      <input type="text" v-model="searchTerm" placeholder="Search"/>
          <label>Search:</label>
    </div>
    <div class="wrapper" v-if="isListVisible">  
      <div class="card" v-for="person in filteredList">
        <p @click="showDetails(person)"> {{ person.fName }} {{ person.lName }} - {{ person.gmailAcc }}</p>
        </a>
      </div>
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