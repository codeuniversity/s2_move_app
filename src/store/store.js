import Vue from 'vue';
import Vuex from 'vuex';

// enable Vuex
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // create global state for menu
    hideMenu: true
  },
  mutations: {
    toggleMenu: state => {
      state.hideMenu=!state.hideMenu;
    }
  }
});