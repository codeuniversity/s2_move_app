import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import router from './routes';
import { config } from "../helpers/firebaseconfig.js"
import firebase from "firebase";
import firebaseui from "firebaseui";
import axios from 'axios';
import { store } from './store/store';

Vue.use(VueRouter);

// routes will always returns index.html
// history mode allows us note display the # before a path(outcome will be localhost:8080/user, rather than localhost:8080/#/user)

new Vue({
  router,
   created(){
  	firebase.initializeApp(config);
  	firebase.auth().onAuthStateChanged((user) => {
  		if(!user) {
        this.$router.push("/login")
  		} else if (user) {
        this.$router.push("/dashboard")
      }
  	})
  },
  el: "#app",
  store: store,
  render: h => h(App)
});
 
Vue.config.productionTip = false
