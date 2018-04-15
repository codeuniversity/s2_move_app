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
		authUser:{}, // firebase user object
		currentUser: {} // filter users by email, depending on auth email
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
		getCurrentUser(state){
			return state.currentUser;
		},
		getListVisibility(state) {
      		return state.searchTerm.length >=2 && Object.keys(state.selectedUser).length == 0;
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
		checkUserStatus({ commit, state }){
			return new Promise((resolve, reject) => {
				firebase.auth().onAuthStateChanged((user) => {
					if(user){
						commit("setAuthUser", user);
						commit("updateUser", user); //only after auth user is caught, get users from database
						resolve(user);
					} else {
						reject("User not logged in")
					}
				});
			});
		},
		// fetchAuthUser({commit, state}){
		// 	return currentUser.getCurrentUser({users, commit});
		// },
		fetchCurrentUser({commit}, currentUser){
			commit("fetchCurrentUser", currentUser);
			console.log("this is fetchCurrentUser action", currentUser)
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
  }
})