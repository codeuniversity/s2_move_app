// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import router from './routes';
import { config } from "./components/helpers/firebaseConfig.js"
import firebase from "firebase" 
import firebaseui from "firebaseui" 

// Enable Vue Router
Vue.use(VueRouter);

// routes will always returns index.html
// history mode allows us not display the # before a path(outcome will be localhost:8080/user, rather than localhost:8080/#/user)

new Vue({
  router,
   created(){
  	firebase.initializeApp(config);
  	firebase.auth().onAuthStateChanged((user) => {
  		if(user) {
  			this.$router.push("/home")
  		}else {
  			this.$router.push("/login")
  		}
  	})
  },
  el: "#app",
  render: h => h(App)
});
 
Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
