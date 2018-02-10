<template>
	<div>

	  <div v-if="Object.keys(selectedPerson).length !== 0">
      <img class="cardimg" :src="selectedPerson.image"> <br>
      <p class="textinfocard"> 
        {{ selectedPerson.fName }} 
        {{ selectedPerson.lName }}
      </p> 
      <p class="textinfocard">
        {{ selectedPerson.group }} - Phone: {{ selectedPerson.mobile }}
      </p>
      <br> 
      <a :href="selectedPerson.googleCal"> Google Calendar</a> 
      <a :href="selectedPerson.wiki"> Wiki</a>
    </div>
    
  </div>  


</template>

<script>

export default {

  name: "Profile",
  props: {
    selectedPerson: Object
  }
}
</script>