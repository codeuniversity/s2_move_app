<template>
  <div class="burger-menu">

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

      <img :src="user.image" alt="user profile picture">
    </div>

<!-- NAVIGATION MENU -->
    <div class="nav">
      <ul class="nav__locations">

      <!-- HAMBURG ROUTE -->

        <router-link 
          to="/hamburg" 
          tag="li" 
          active-class="active" exact
          @click.native="toggleSubmenu1=!toggleSubmenu1">
          <a>HAMBURG</a>
          <!-- <input type="checkbox" id="menu-toggle"/> -->



          <!-- SUBMENU 1 / Select location -->
          <ul :class="{'submenu-1':toggleSubmenu1}">
            <router-link 
              to="/hamburg/ottensen" 
              tag="li"
              active-class="active"
              @click.native="toggleSubmenu2=!toggleSubmenu2">
              <a>S2+</a>

          <!-- HAMBURG SUBMENU 2 / Select building -->           

              <ul :class="{'submenu-2':toggleSubmenu2}">
                <router-link 
                  to="/hamburg/ottensen"
                  tag="li"
                  active-class="active">
                  <a>A</a>
                </router-link>

                <router-link 
                  to="/hamburg/ottensen"
                  tag="li"
                  active-class="active" exact>
                  <a>B</a>
                </router-link>

                <router-link 
                  to="/hamburg/ottensen"
                  tag="li"
                  active-class="active" exact>
                  <a>H</a>
                </router-link>
              </ul>
            </router-link>

          <!-- SUBMENU 1 / Select location -->
            <router-link
              to="/hamburg/ottensen" 
              tag="li"
              active-class="active" exact>
              <a>S2S</a>
            </router-link>

            <router-link
              to="/hamburg/schlump" 
              tag="li"
              active-class="active" exact>
              <a>S2C</a>
            </router-link>
          </ul>
          </router-link>
        </router-link>

      <!-- BERLIN ROUTE -->
        <router-link 
          to="/berlin"
          tag="li" 
          active-class="active" exact>
          <a>BERLIN</a>
        </router-link>

      <!-- FRANKFURT ROUTE -->
        <router-link 
          to="/frankfurt"
          tag="li"
          active-class="active">
          <a>FRANKFURT</a>
        </router-link>

      <!-- MUNICH ROUTE -->
        <router-link 
          to="/munich" 
          tag="li" 
          active-class="active" exact>
          <a>MUNICH</a>
        </router-link>

              <!-- FRANKFURT ROUTE -->
        <router-link 
          to="/prague"
          tag="li"
          active-class="active">
          <a>PRAGUE</a>
        </router-link>

      </ul>
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
      toggleSubmenu1: false,
      toggleSubmenu2: false,
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

</script>

<style lang="css">

@import "../../vendor/css/menu.component.css"

</style>


