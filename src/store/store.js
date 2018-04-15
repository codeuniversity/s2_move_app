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
		authUser:{} // firebase user object
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
		},
		getDesks(state) {
			return state.desks;
		},
		getListVisibility(state) {
      return state.searchTerm.length >=2 && Object.keys(state.selectedUser).length == 0;
    },
    getAuthUser(state){
    	return state.authUser;
    }
 	},
	actions: {
		fetchUsers({commit}) {
			return users.getUsers(users, {commit}); 
		},
		updateTerm({ commit }, searchTerm) {
    	commit("updateTerm", searchTerm);	
		},
		selectUser({ commit }, selectedUser) {
			commit("selectUser", selectedUser);	
			console.log("Hello, this is selectUser", selectedUser)
		},
		fetchFilteredUsers({commit}, filteredUsers) {
			commit("fetchFilteredUsers", filteredUsers);
		},
		fetchDesks({commit}) {
			return desks.getDesks(desks, {commit});
		},
		// fetchUpdatedAuthUser({commit},state){
		// 	return new Promise((resolve, reject) => {
		// 		 Object.values(state.authUser).forEach(value =>  {
		// 			if(userref){
		// 			commit("updateAuthUser");
		// 		} else {
		// 			console.log("user was not updated");
		// 		}
		// 	});
		// });
		// },
		// checkUpdatedUser({commit, state}){
		// 	return new Promise((resolve, reject) => {
		//  		Object.keys(state.users).forEach(user =>{
		//  			if(user.deskref){
		//  		 		commit("setAuthUser");
		//  		 	}
		//  		});
		//  	}); 
		// },

		checkUserStatus({ commit, state }){
			return new Promise((resolve, reject) => {
				firebase.auth().onAuthStateChanged((user) =>{
					if(user){
						commit("setAuthUser", user);
						commit("updateUser", user); //only after auth user is caught, update users from database
						commit("updateAuthUser", user);
						resolve(user);
					} else {
						reject("User not logged in")
					}
				});
			});
		// },
		// fetchAuthUser({commit, state}){
		// 	//promise to wait until authUser is set up, before updating authUser
		// 	return new Promise((resolve, reject) => {
		// 		if (state.authUser) {
		// 			commit("updateAuthUser", state.authUser);
		// 		} else {
		// 			reject("auth user not set up")
		// 		}
			// });
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
		  })
    },
    setAuthUser( state, authUser ){
    	state.authUser = authUser;
    	console.log("setAuthUser", authUser)
    },
    //integrates the current user database info into authUser object
    updateAuthUser(state){
    	return Object.values(state.users).forEach(user =>  {
     		if (state.authUser.email == user.gmailAcc){
     			state.authUser.userref = user;
     		}
		  })
    }
  }
})

