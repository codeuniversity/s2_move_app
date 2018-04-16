<template>
  <div class="map">
    <div v-if="getUsers.length">
          <a
          href="#"
          class="dropdown-toggle seat" 
          v-for="desk in deskList" 
          @click="handler(desk.id)"
          :style="calculatePosition(desk.xCoord, desk.yCoord, desk.angle)">
            <img class="seat__image" :src="findUserImage(desk.user)" 
            :style="`transform: rotate(-${desk.angle}deg)`"/>
          </a> 
          <div class="dropdown"> 
            <ul class="dropdown-menu" v-if="showList"             
                v-click-outside="hideList">Check In
              <li id="menu-options" v-for="option in options">
                <input id="menu-button"type="button" @click="showModal" :value="option.item">
              </li>
            </ul>
          </div> 
    </div>
      <modal name="search">
        <app-search :action="checkIn"></app-search>
      </modal>
  </div>
</body>  

</template>

<script>

import axios from "axios"
import Search from "../Search.vue"
import { mapActions, mapGetters } from 'vuex'


export default {

  name: "HamburgOttensen",
   data() {
    return {
      deskList: [],
      selectedDesk: null,
      showList:false,
      options: [
        {
          item: "Myself"
        },
        {
          item: "Someone Else"
        },
        {
          item: "Report An Issue"
        }
      ]
    }   
  },
  components: {
    "appSearch": Search
  },
  created() {
    axios.get("https://s2-move.firebaseio.com/desks.json")
      .then(res => {
          const data = res.data
          const desks = []
          for (let key in data) {
            const desk = data[key]
            desk.id = key
            desks.push(desk)
          }
          this.deskList = desks
            // console.log(desks)
          })
      .catch(error => console.log(error))
  },
  methods: {
    ...mapActions(["updateTerm", "selectUser", "fetchUsers"]),
    selectDesk(deskId) {
      this.selectedDesk = deskId;
      console.log(this.selectedDesk);
    },
    handler(deskId) {
      this.selectDesk(deskId)
      this.showList = !this.showList
      this.resetForm();
    },
    hideList() {
      this.showList = false;
    },
    showModal () {
      this.$modal.show('search');
    },
    hideModal () {
      this.$modal.hide('search');
    },
    resetForm() {
      this.updateTerm('')
      this.selectUser({});
    },
    checkIn(selectedUser) {
      console.log("I'm the check in")
      axios.patch(`https://s2-move.firebaseio.com/users/${selectedUser.idRef}.json`,
      {desk: this.selectedDesk})
      axios.patch(`https://s2-move.firebaseio.com/desks/${this.selectedDesk}.json`,
      {user: selectedUser.idRef})
      console.log(selectedUser.idRef)
      // this.fetchUsers()
    },
    calculatePosition(xCoord, yCoord, angle) {
      return {
        top: yCoord + "px",
        left: xCoord + "px",
        transform: "rotate("+ angle + "deg)"
      }
    },
    findUserImage(deskUser) {
      // console.log(deskUser)
      var found = this.getUsers.find(function(element) {
        // console.log(element)
        return element.idRef == deskUser
      });
      return found.image;
    }
  },
  computed: {
    ...mapGetters(["getSelectedUser", "getUsers"])
  }
}

</script>

<style lang="css">

@import "../../../styles/css/ottensen.component.css"

</style>
