import Vue from "vue";
import Vuex from "vuex";
import users from "@/api/users"


Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		users: [ ],
		searchTerm: '',
		selectedUser: {}
	},
	getters: {
		ListFilteredUsers(state, getters) {
			return state.users.filter(user => {
          		var fullName = `${user.fName} ${user.lName}`;
	            return fullName.toLowerCase().includes(state.searchTerm.toLowerCase())
	            || user.gmailAcc.toLowerCase().includes(state.searchTerm.toLowerCase())
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
		}
	},
	actions: {
		fetchUsers({commit}) {
			// return new Promise((resolve, reject) => {
			//make the call
			//here we call the mutations(passing params to mutations)
				users.getUsers(users, {commit}) 
		},
		updateTerm({ commit }, searchTerm) {
    		commit("updateTerm", searchTerm);	
		},
	},
	mutations: {
		setUsers(state, users) {
			//update users
			state.users = users;
		},
		setSearchTerm(state) {
      		state.selectedUser = { };
    	},
    	isListVisible(state) {
      		return state.searchTerm.length >=2 && Object.keys(state.selectedUser).length == 0;
    	},
    	updateTerm(state, searchTerm) {
    		state.searchTerm = searchTerm;
		}
	}
});