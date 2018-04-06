import Vue from "vue";
import Vuex from "vuex";
import users from "@/api/users";


Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		users: [],
		searchTerm: '',
		selectedUser: {},
		hideMenu: true,
		filteredUsers: []
	},
	getters: {
		getFilteredUsers(state) {
			return  state.filteredUsers = state.users.filter(user => {
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
		getListVisibility(state) {
      		return state.searchTerm.length >=2 && Object.keys(state.selectedUser).length == 0;
      	}
	},
	actions: {
		fetchUsers({commit}) {
			users.getUsers(users, {commit}) 
		},
		updateTerm({ commit }, searchTerm) {
    		commit("updateTerm", searchTerm);	
		},
		selectUser({ commit }, selectedUser) {
			commit("selectUser", selectedUser);	
		},
		fetchFilteredUsers({commit}, filteredUsers) {
			commit("fetchFilteredUsers", filteredUsers);
		}
	},
	mutations: {
		setUsers(state, users) {
			//update users
			state.users = users;
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
    		state.filteredUsers = fetchFilteredUsers;
    	}

	}
  })
