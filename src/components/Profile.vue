<template>
	  <div class="profile" v-if="Object.keys(selectedUser).length !== 0">
      <!-- display user image -->
      <div class="profile__img">
      <img :src="selectedUser.image"> <br>
      </div>
      <div class="profile__user-info">
        <!-- display user name -->
        <h1> 
          {{ selectedUser.fName }} 
          {{ selectedUser.lName }}
        </h1> 
        <!-- display desk location -->
        <ul>
          <li>HAM</li>
          <li>S2</li>
          <li>A-3</li>
        </ul>
        <!-- display jobtitle and team info  -->
        <h2>
          {{ selectedUser.jobTitle }}
          <br>
          Team {{ selectedUser.team}}
        </h2>
      </div>
      <div class="profile__line-separator"></div>
      <!-- display user contact info -->
      <table class="profile__user-contact">
        <tr>
          <td><img id="mobile-icon" src="../assets/icons/mobile-icon.png"></td>
          <td><a :href="`mailto:${selectedUser.gmailAcc}`">{{ selectedUser.gmailAcc }}</a></td> 
        </tr>
        <tr>
          <td><img src="../assets/icons/phone-icon.png"></td>
          <td><a :href="`tel:${selectedUser.mobile}`">{{ selectedUser.mobile }}</a></td> 
        </tr>
        <tr>
          <td><img src="../assets/icons/mail-icon.png"></td>
          <td><a :href="`tel:${selectedUser.landline}`">{{ selectedUser.landline }}</a></td> 
        </tr>
      </table>
      <!-- flexible container to adjust height -->
      <div class="profile__flex-container"></div>
      <!-- display deep link icons -->
      <div class="profile__user-deep-links">
        <a :href="selectedUser.wiki" target="_blank"><img id="wiki-icon" src="../assets/icons/wikipedia.png"></a>
        <a :href="selectedUser.googleCal" target="_blank"><img src="../assets/icons/ic-date-range-black-24.png"></a>
        <a href="https://codeuniversity.slack.com/messages/C53K4L88M/" target="_blank"><img src="../assets/icons/slack-mark-monochrome-black.png" target="_blank"></a>
        <a :href="selectedUser.skillWill" target="_blank"><img src="../assets/icons/skillwill.png"></a>

      </div>

<!--       <p class="profile__text">
        {{ selectedUser.team }} - Phone: {{ selectedUser.mobile }}
      </p>
      <br> 
      <div class="profile__social">
        <a :href="selectedUser.googleCal"> Google Calendar</a> 
        <a :href="selectedUser.wiki"> Wiki</a>
    </div> -->
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