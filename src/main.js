import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App'
import router from './routes';
import vClickOutside from 'v-click-outside';
import VModal from 'vue-js-modal';
import { config } from "../helpers/firebaseconfig.js";
import { store } from "./store/store"
import firebase from "firebase"; 
import firebaseui from "firebaseui"; 


Vue.use(VueRouter);
Vue.use(vClickOutside);
Vue.use(VModal);


// routes will always returns index.html
// history mode allows us note display the # before a path(outcome will be localhost:8080/user, rather than localhost:8080/#/user)

new Vue({
  router,
  store,
   created(){
  	firebase.initializeApp(config);
  	firebase.auth().onAuthStateChanged((user) => {
  		if(!user) {
        this.$router.push("/login")
  		} else if (user) {
        var userEmail = user.email;
        // console.log(userEmail)
        this.$router.push("/dashboard")
      }
  	})
  },
  el: "#app",
  store: store,
  render: h => h(App)
});
 
Vue.config.productionTip = false
