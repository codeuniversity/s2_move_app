import Vue from "vue";
import Vuex from "vuex";
import users from "@/api/users";
import desks from "@/api/desks";
import firebase from 'firebase';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		users: {},
		searchTerm: '',
		selectedUser: {},
		hideMenu: true,
		filteredUsers: {},
		desks: {},
		authUser:{} // firebase auth user object
	},
	getters: {
		getFilteredUsers(state) {
			return state.filteredUsers = Object.values(state.users).filter(user => {
		    var fullName = `${user.fName} ${user.lName}`;
		    //search by name
			  return fullName.toLowerCase().includes(state.searchTerm.toLowerCase())
			  //search by email
			  || user.gmailAcc.toLowerCase().includes(state.searchTerm.toLowerCase())
			  // search by team
		    || user.team.toLowerCase().includes(state.searchTerm.toLowerCase())
		  })
		},
		getSearchTerm(state) {
			return state.searchTerm;
		},
		getSelectedUser(state) {
			return state.selectedUser;
		},
		getUsers(state) {
			return state.users;
      console.log(state.users)
		},
		getDesks(state) {
			return state.desks;
		},
		getListVisibility(state) {
<<<<<<< HEAD
      		return state.searchTerm.length >=2 && Object.keys(state.selectedUser).length == 0;
=======
      return state.searchTerm.length >=2 && Object.keys(state.selectedUser).length == 0;
    },
    getAuthUser(state){
    	return state.authUser;
>>>>>>> 84d78034c182b79eb3e7445ee68a9f7e4d255d87
    }
 	},
	actions: {
		fetchUsers({commit}) {
			return users.getUsers(users, {commit}); 
		},
    fetchDesks({commit}) {
      return desks.getDesks(desks, {commit});
    },
    checkUpdatedUser({commit, state}){
      return new Promise((resolve, reject) => {
        Object.keys(state.users).forEach(user =>{
          if(user.deskref){
            commit("updateAuthUser");
          } else {
            reject("No desk assigned.")
          }
        });
      }); 
    },
    //check if user is logged in
    checkUserStatus({ commit, state }){
      return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user) =>{
          if(user){
            commit("setAuthUser", user);
            commit("updateUser", user); //only after auth user is caught, update users from database
            resolve(user);
          } else {
            reject("User not logged in")
          }
        });
      });
    },
		updateTerm({ commit }, searchTerm) {
    	commit("updateTerm", searchTerm);	
		},
		selectUser({ commit }, selectedUser) {
			commit("selectUser", selectedUser);	
			// console.log("Hello, this is selectUser", selectedUser)
		},
		fetchFilteredUsers({commit}, filteredUsers) {
			commit("fetchFilteredUsers", filteredUsers);
		}
	},
	mutations: {
		setUsers(state, users) {
			state.users = users;
			console.log("This is setUsers", users)
		},
		setDesks(state, desks) {
			state.desks = desks;
			console.log("This is setDesks", desks)
		},
    setAuthUser( state, authUser ){
      state.authUser = authUser;
      console.log("setAuthUser", authUser)
    },
    updateUser(state) {
      //assign deskref to user object. Waits for desks and users axios request
      Object.values(state.users).forEach(user =>  {
        if(user.desk) {
          let desk = state.desks[user.desk];
          if (desk) {
            user.deskref = desk;
          }
          //integrates the database user info into the authUser object
          if (state.authUser && state.authUser.email == user.gmailAcc){
            state.authUser.userref = user;
          }

          // integrates the authent. Google user to user in users object
          if (state.authUser.email == user.gmailAcc){
            user.authUserRef = state.authUser;
          }
        }
      });
      //adds userref to desks
      Object.values(state.desks).forEach(desk =>  {
        if(desk.user) {
          let user = state.users[desk.user];
          if (user) {
            desk.userref = user;
          }
        }
      });
    },
		setSearchTerm(state) {
      		state.selectedUser = { };
    	},
    	updateTerm(state, searchTerm) {
    		state.searchTerm = searchTerm;
		},
		selectUser(state, selectedUser) {
			state.selectedUser = selectedUser;
		},
		toggleMenu(state) {
		   state.hideMenu=!state.hideMenu;
<<<<<<< HEAD
    	},
    	fetchFilteredUsers(state) {
    		state.filteredUsers = fetchFilteredUsers;
    	},
	    updateUser(state) {
	      //assign deskref to user object. Waits for desks and users axios request
		    return Object.values(state.users).forEach(user =>  {
			  	if(user.desk) {
			      let desk = state.desks[user.desk];
			      if (desk) {
				      user.deskref = desk;
			      }
			    }
			    // if authent. user, add reference to users
			    if (state.authUser.email == user.gmailAcc){
			    	user.authUserRef = state.authUser;
			    }
			  })
	    },
	    setAuthUser(state, authUser){
	    	state.authUser = authUser;
	    	console.log("setAuthUser", authUser)
	    },
    	//to add authuser reference to auth user 
	    fetchAuthUser(state){
	    	return Object.values(state.users).forEach(user => {
	    		if(user.authUserRef){
	    			let userRef = state.users[user];
	    			authUser.userRef = userRef;
	    		}
	    	})
    		console.log("updateAuthUser", authUser)
   		},
    	fetchCurrentUser(state) {
	    	return state.currentUser = Object.values(state.users).filter(user => {
					if (state.authUser.email == user.gmailAcc){
						state.currentUser = user;
					}
	    	})
    		console.log("fetchCurrentUser mutation", currentUser)
    	},
=======
    },
    fetchFilteredUsers(state) {
    	state.filteredUsers = fetchFilteredUsers;
    }
>>>>>>> 84d78034c182b79eb3e7445ee68a9f7e4d255d87
  }
})

