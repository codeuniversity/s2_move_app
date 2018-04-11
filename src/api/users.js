/* Fetching users from the API (Firebase) --> to mock client-server processing */

const users = {}

import axios from "axios";

export default {

	getUsers(users, {commit}) {
	   return axios.get("https://s2-move.firebaseio.com/users.json")
    .then(res => {
      let users = res.data
      // this.users = userList
      commit("setUsers",users)
      commit('updateUser');
        // console.log("I'm the user List being called from an external file!", users)
      })
      .catch(error => console.log(error))
	   }  
}
