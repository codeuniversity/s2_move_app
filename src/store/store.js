import Vue from "vue";
import Vuex from "vuex";
import users from "@/api/users";
import desks from "@/api/desks";


Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		users: {},
		searchTerm: '',
		selectedUser: {},
		hideMenu: true,
		filteredUsers: [],
		desks: {}
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
		}
	},
	mutations: {
		setUsers(state, users) {
			//update users
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

    	fetchFilteredUsers(state, filteredUsers) {
    		state.filteredUsers = fetchFilteredUsers; // ???
    	},
    	updateUser(state) {
	      Object.values(state.users).forEach(user =>  {
	          if(user.desk) {
	            let desk = state.desks[user.desk];
	            console.log("found desk in user", user)
	            if (desk) {
		            user.deskref = desk;
	            	console.log("found desk", desk.acronym, user.deskref.division, user.deskref.building, user.deskref.level);	
	            } else {
	            	console.log('invalid desk for user ')
	            }
	          } else {
	            console.log("no desk")
	          }
	      },
      console.log("This is updateUser", users)
        );
    	}
	}
  })