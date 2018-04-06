/* Fetching users from the API (Firebase) --> to mock client-server processing */

const users = []

import axios from "axios";
export default {
	getUsers(users, {commit}) {
	axios.get("https://s2-move.firebaseio.com/users.json")
    .then(res => {
      const data = res.data
      let users = []
      for (let key in data) {
        const user = data[key]
        user.id = key
        users.push(user)
      }
      // this.users = userList
      commit("setUsers",users)
        console.log("I'm the user List being called from an external file!", users)
      })
      .catch(error => console.log(error))
	}
}