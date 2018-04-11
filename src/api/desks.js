/* Fetching desks from the API (Firebase) --> to mock client-server processing */

const desks = {}

import axios from "axios";
export default {

  getDesks(desks, {commit}) {
      return axios.get("https://s2-move.firebaseio.com/desks.json")
        .then(res => {
              this.desks = res.data
              // console.log(deskList)
              commit("setDesks", this.desks)
              commit('updateUser');
            })
        	.catch(error => console.log(error))
  } 
}  