<template>
  <div>
    <div class="dropdown">
          <input type="button" 
          class="dropdown-toggle seat" 
          v-for="desk in deskList" 
          :value="desk.id"
          @click="handler(desk.id)"
          :style="calculatePosition(desk.xCoord, desk.yCoord, desk.angle)" 
          />  
         <ul class="dropdown-menu" v-if="showList" v-click-outside="hideList"> Check In
            <li v-for="option in options">
              <input type="button" @click="showModal" :value="option.item">
            </li>
          </ul>
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
            // desk.id = key
            desks.push(desk)
          }
          this.deskList = desks
            console.log(desks)
          })
      .catch(error => console.log(error))
  },
  methods: {
    selectDesk(deskId) {
      this.selectedDesk = deskId;
      console.log(this.selectedDesk);
    },
    handler(deskId) {
      this.selectDesk(deskId)
      this.showList = !this.showList
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
    checkIn(selectedUser) {
      console.log("I'm the check in")
    },
    calculatePosition(xCoord, yCoord, angle) {
      return {
        top: yCoord + "px",
        left: xCoord + "px",
        transform: "rotate("+ angle + "deg)"
      }
    }
  }
}

</script>

<style lang="css">

@import "../../../styles/css/ottensen.component.css"

</style>

