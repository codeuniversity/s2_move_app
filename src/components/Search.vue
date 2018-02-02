<template>

<div>  
  <div class="search-wrapper">
        <input class="search-input" type="text" v-model="searchTerm" placeholder="Search"/>
         <!--    <label>Search:</label> -->
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

<style scoped>
   .search-input {
    /*  width: 560px;
      height: 50px;*/
      background-color: #ffffff;
  /*    margin-left: 381px;
      margin-top: 405px;*/
      width: 40vh;
      height: 8vh;
      margin: 30vh 10vh;
     /* margin-top: 40vh;
      margin-left: 80vh;*/

  }
  .card {
    background-color: white;
    width: 300px;
    position: absolute;
    right: 480px;
    padding: 10px;

  }
</style>