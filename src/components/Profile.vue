<template>
	  <div class="profile" v-if="Object.keys(selectedPerson).length !== 0">
      <div class="profile__header">
        <img class="profile__img" :src="selectedPerson.image"> <br>
        <h3 class="profile__name"> 
          {{ selectedPerson.fName }} 
          {{ selectedPerson.lName }}
        </h3> 
      </div>
      <p class="profile__text">
        {{ selectedPerson.group }} - Phone: {{ selectedPerson.mobile }}
      </p>
      <br> 
      <div class="profile__social">
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

<style>

.profile {
  background-color: rgb(76, 19, 209);
  color: white;
  position: absolute;
  width: 100%;
  top: 50px;
  padding: 10px;
}

.profile__header {
  width: 100%;
  float: left;
}

.profile__img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  float: right;
}

.profile__name {
  width: calc(100% - 100px);
  float: left;
}
.profile__text {
  float: left;
  width: 100%;
}

.profile__social {
  width: 100%;
  float: left;
}

</style>