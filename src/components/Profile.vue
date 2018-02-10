<template>
	  <div class="profile" v-if="Object.keys(selectedPerson).length !== 0">
      <img class="profile__img" :src="selectedPerson.image"> <br>
      <p class="profile__infocard"> 
        {{ selectedPerson.fName }} 
        {{ selectedPerson.lName }}
      </p> 
      <p class="profile__text">
        {{ selectedPerson.group }} - Phone: {{ selectedPerson.mobile }}
      </p>
      <br> 
      <a :href="selectedPerson.googleCal"> Google Calendar</a> 
      <a :href="selectedPerson.wiki"> Wiki</a>
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

<style>

.profile {
  background-color: rgb(76, 19, 209);
  color: white;
}

.profile__img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  position: relative;
  left: 30%;
}

</style>