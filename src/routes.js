import VueRouter from "vue-router";

// ## Main Components 

import Auth from "./components/Auth.vue"
import Dashboard from "./components/Dashboard.vue"
import Login from "./components/Login.vue"
import Header from "./components/Header.vue"
import Profile from "./components/Profile.vue"
import Search from "./components/Search.vue"


//## Maps

import Berlin from "./components/maps/Berlin.vue"
import Frankfurt from "./components/maps/Frankfurt.vue"
import HamburgOttensen from "./components/maps/HamburgOttensen.vue"
import HamburgSchlump from "./components/maps/HamburgSchlump.vue"
import Munich from "./components/maps/Munich.vue"
import Prague from "./components/maps/Prague.vue"



const router = new VueRouter({
	mode: "history",
	routes: [
		{ 
			path: '/login', 
			component: Login 
		},
		{ path: '/dashboard', 
			component: Dashboard, 
			meta: {
				requiresAuth: true
			},
		children: [
			{ path: '/header', component: Header },
			{ path: '/auth', component: Auth },
			{ path: '/profile', component: Profile },
			{ path: '/search', component: Search },
			{ path: '/berlin', component: Berlin },
			{ path: '/frankfurt', component: Frankfurt },
			{ path: '/ottensen', component: HamburgOttensen },
			{ path: '/schlump', component: HamburgSchlump },
			{ path: '/munich', component: Munich },
			{ path: '/prague', component: Prague }
		]}
	]
});


export default router;


