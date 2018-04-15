/* Fetching users from the API (Firebase) --> to mock client-server processing */

const users = {}

import axios from "axios";

export default {

	getUsers(users, {commit}) {
	   return axios.get("https://s2-move.firebaseio.com/users.json")
    .then(res => {
      let users = res.data
      commit("setUsers", users)
      //promise to update users
      commit('updateUser');
      })
      .catch(error => console.log(error))
	   }  
}
