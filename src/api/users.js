/* Fetching users from the API (Firebase) --> to mock client-server processing */

// const users = {}
const userList = []

import axios from "axios";

export default {

	getUsers(users, {commit}) {
	   return axios.get("https://s2-move.firebaseio.com/users.json")
    .then(res => {
      let users = res.data
      for (let key in users) {
            const user = users[key]
            user.idRef = key
            userList.push(user)
      }
      commit("setUsers", userList)
      //promise to update users
      commit('updateUser');
      //promise to current user
      commit('fetchCurrentUser');
      })
      .catch(error => console.log(error))
	   }  
}
