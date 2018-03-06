
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import router from './routes';

Vue.use(VueRouter);

// routes will always returns index.html
// history mode allows us not display the # before a path(outcome will be localhost:8080/user, rather than localhost:8080/#/user)

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
 
Vue.config.productionTip = false
