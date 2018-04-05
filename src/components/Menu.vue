<template>
  <div  class="menu__wrapper">

  <!-- OVERLAY TO TOGGLE MENU -->
  <div class="menu__toggle" @click="closeMenu()"></div>

  <!-- BURGER MENU -->
  <div  class="burger-menu">

    <!-- USER INFO -->
    <div class="user-info">
      <div class="user-text">
        <h2>{{user.fName}} {{user.lName}}</h2>
      </div>

      <div class="desk-text">
        <ul>
          <li>{{desk.acronym }}</li>
          <li>{{desk.division}}</li>
          <li>{{desk.building}}{{desk.level}}</li>
        </ul>
      </div>

      <!-- default user image -->
      <img src="../assets/icons/default-user-icon.png" alt="default user image">
      <!-- user data image -->
      <img :src="user.image" alt="user profile picture">

      <img id="btn__close" src="../assets/icons/close-black-icon.png" @click="closeMenu()">

    </div>

<!-- NAVIGATION MENU -->
    <div class="nav">
      <ul class="nav__locations">

      <!-- HAMBURG ROUTE -->
        <router-link
          to="/hamburg" 
          tag="li" 
          active-class="active"
          @click.native="showSubmenu=!showSubmenu">
          <a>HAMBURG</a>
        </router-link>

          <!-- SUBMENU 1 / Select location -->
          <ul :class="{'submenu-visible':showSubmenu}" class="submenu">
            <router-link 
              to="/hamburg/ottensen" 
              tag="li"
              active-class="active" exact
              @click.native="closeMenu()">
              <a>S2 &amp S2S</a>
            </router-link>

            <router-link
              to="/hamburg/schlump" 
              tag="li"
              active-class="active" exact
              @click.native="closeMenu()">
              <a>S2C</a>
            </router-link>
          </ul>

        
      <!-- BERLIN ROUTE -->
        <router-link 
          to="/berlin"
          tag="li" 
          active-class="active" exact
          @click.native="closeMenu()">
          <a>BERLIN</a>
        </router-link>

      <!-- FRANKFURT ROUTE -->
        <router-link 
          to="/frankfurt"
          tag="li"
          active-class="active"
          @click.native="closeMenu()">
          <a>FRANKFURT</a>
        </router-link>

      <!-- MUNICH ROUTE -->
        <router-link 
          to="/munich" 
          tag="li" 
          active-class="active" exact
          @click.native="closeMenu()">
          <a>MUNICH</a>
        </router-link>

              <!-- FRANKFURT ROUTE -->
        <router-link 
          to="/prague"
          tag="li"
          active-class="active" exact
          @click.native="closeMenu">
          <a>PRAGUE</a>
        </router-link>

      </ul>

    </div>
      <div class="menu__feedback">
        <div class="feedback-visible">
        <a href="mailto:marie.klaus@code.berlin?subject= Move App user feedback" id="feedback"><b>Feedback</b></a>
        <p> <b>Logout</b> </p>
      </div>
    </div>
  </div>

</div>

</template>

<script>

import axios from 'axios';

export default {
	name: 'Menu',
  data () {
    return {
      user: {},
      desk: {},
      showSubmenu: false,
      authUser: {}
    }
  },
  methods: {
    closeMenu () {
      // always close submenu when menu is closed
      this.showSubmenu = false;
      // hide the menu, refer to global state
      return this.$store.state.hideMenu = !this.$store.state.hideMenu;
    }
  },
  created () {
    //request user info
    var self = this;
    axios.get('https://s2-move.firebaseio.com/users/user0008.json')
    .then(function (response) {
      console.log(response);
      self.user = response.data;
    })
    //request desk info
    axios.get('https://s2-move.firebaseio.com/desks/desk0006.json')
      .then(function (response) {
      console.log(response);
      self.desk = response.data;
      })
      //logs an error
    .catch(error => console.log(error))
  }
}

// Create a computed property for the click listener
</script>

<style lang="css">

@import "../../styles/css/menu.component.css"

</style>


