<template>
	  <div class="profile" v-if="Object.keys(selectedUser).length !== 0">
      <div class="profile__header">
        <img class="profile__img" :src="selectedUser.image"> <br>
        <h3 class="profile__name"> 
          {{ selectedUser.fName }} 
          {{ selectedUser.lName }}
        </h3> 
      </div>
      <p class="profile__text">
        {{ selectedUser.team }} - Phone: {{ selectedUser.mobile }}
      </p>
      <br> 
      <div class="profile__social">
        <a :href="selectedUser.googleCal"> Google Calendar</a> 
        <a :href="selectedUser.wiki"> Wiki</a>
    </div>
  </div>  
</template>

<script>

export default {

  name: "Profile",
  props: {
    selectedUser: Object
  }
}
</script>

<style lang="css">

@import "../../styles/css/profile.component.css"

</style>