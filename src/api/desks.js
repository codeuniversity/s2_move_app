/* Fetching desks from the API (Firebase) --> to mock client-server processing */

const desks = []

import axios from "axios";
export default {

  getDesks(desks, {commit}) {
      axios.get("https://s2-move.firebaseio.com/desks.json")
        .then(res => {
            const data = res.data
            let desks =[]
            for (let key in data) {
              const desk = data[key]
              desk.id = key
              desks.push(desk)
            }
            this.desks = desks
              // console.log(deskList)
              commit("setDesks", desks)
            })
        	.catch(error => console.log(error))
  } 
}  