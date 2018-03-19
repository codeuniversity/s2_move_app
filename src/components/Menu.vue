<template>
  <div class="menu__wrapper" >
  <button type="button" @click="openMenu=!openMenu" >Toggle Menu</button>
  <div :class="{'menu-visible':openMenu}" class="burger-menu">

    <!-- USER INFO -->
    <div class="user-info">

      <div class="user-text">
        <h2>{{user.fName}} {{user.lName}}</h2>
      </div>

      <div class="desk-text">
        <ul>
          <li>{{desk.acronym }}</li>
          <li>{{desk.division}}</li>
          <li>{{desk.building}}-{{desk.level}}</li>
        </ul>
      </div>

      <!-- default user image -->
      <img src="../assets/icons/default-user-icon.png" alt="default user image">
      <!-- user data image -->
      <img :src="user.image" alt="user profile picture">
    </div>

<!-- NAVIGATION MENU -->
    <div class="nav">
      <ul class="nav__locations">

      <!-- HAMBURG ROUTE -->
        <router-link
          to="/hamburg" 
          tag="li" 
          active-class="active"
          @click.native="toggleSubmenu=!toggleSubmenu">
          <a>HAMBURG</a>
        </router-link>
          <!-- <input type="checkbox" id="menu-toggle"/> -->

          <!-- SUBMENU 1 / Select location -->
          <ul :class="{'submenu-visible':toggleSubmenu}" class="submenu">
            <router-link 
              to="/hamburg/ottensen" 
              tag="li"
              active-class="active" exact
              @click.native="openMenu=!openMenu">
              <a>S2 &amp S2S</a>
            </router-link>

            <router-link
              to="/hamburg/schlump" 
              tag="li"
              active-class="active" exact
              @click.native="openMenu=!openMenu">
              <a>S2C</a>
            </router-link>
          </ul>

        
      <!-- BERLIN ROUTE -->
        <router-link 
          to="/berlin"
          tag="li" 
          active-class="active" exact
          @click.native="openMenu=!openMenu">
          <a>BERLIN</a>
        </router-link>

      <!-- FRANKFURT ROUTE -->
        <router-link 
          to="/frankfurt"
          tag="li"
          active-class="active"
          @click.native="openMenu=!openMenu">
          <a>FRANKFURT</a>
        </router-link>

      <!-- MUNICH ROUTE -->
        <router-link 
          to="/munich" 
          tag="li" 
          active-class="active" exact
          @click.native="openMenu=!openMenu">
          <a>MUNICH</a>
        </router-link>

              <!-- FRANKFURT ROUTE -->
        <router-link 
          to="/prague"
          tag="li"
          active-class="active" exact
          @click.native="openMenu=!openMenu">
          <a>PRAGUE</a>
        </router-link>

      </ul>

    </div>
      <div class="menu__feedback">
        <div class="feedback-visible">
        <a href="mailto:marie.klaus@code.berlin?subject= Move App user feedback" id="feedback"><b>Feedback</b></a>
        <p> <b>Made with &hearts; by &lt;&gt;</b> </p>
      </div>
    </div>
  </div>

  <div 
    :class="{'menu-visible':openMenu}"
    class="menu__toggle" 
    @click="openMenu=!openMenu">
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
      toggleSubmenu: false,
      openMenu: false
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
    axios.get('https://s2-move.firebaseio.com/desks/desk0008.json')
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

@import "../../vendor/css/menu.component.css"

</style>


