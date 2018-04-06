/* Fetching desks from the API (Firebase) --> to mock client-server processing */

const desks = []

import axios from "axios";
export default {

  fetchDesks(desks, {commit}) {
      axios.get("https://s2-move.firebaseio.com/desks.json")
        .then(res => {
            const data = res.data
            const deskList = []
            for (let key in data) {
              const desk = data[key]
              // desk.id = key
              deskList.push(desk)
            }
            this.desks = deskList
              console.log(deskList)
              commit("setDesks",desks)
            })
        .catch(error => console.log(error))
  } 
}  