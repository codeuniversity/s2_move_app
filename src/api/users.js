/* Fetching users from the API (Firebase) --> to mock client-server processing */

const users = []

import axios from "axios";
export default {
	fetchUsers() {
	axios.get("https://s2-move.firebaseio.com/users.json")
    .then(res => {
      const data = res.data
      const userList = []
      for (let key in data) {
        const user = data[key]
        user.id = key
        userList.push(user)
      }
      this.users = userList
        console.log(userList)
      })
      .catch(error => console.log(error))
	}

}