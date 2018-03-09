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
   <!--  <div class="nav">
      <ul class="burger-menu">
      <!-- HAMBURG ROUTE -->
<!--         <router-link 
          to="/hamburg" 
          tag="li" 
          active-class="active">
          <a href="javascript:void(0)">HAMBURG</a> -->

          <!-- SUBMENU 1 / Select location -->
<!--           <ul class="submenu_1">
            <router-link 
              to="/hamburg/schlump" 
              tag="li"
              active-class="active">
              <a>S2</a> -->

          <!-- SUBMENU 2 / Select building -->
<!--               <ul class="submenu_2">
                <router-link 
                  to="/hamburg/ottensen/0"
                  tag="li"
                  active-class="active">
                  <a>A</a>
                </router-link>

                <router-link 
                  to="/hamburg/ottensen/1"
                  tag="li"
                  active-class="active">
                  <a>B</a>
                </router-link>

                    <router-link 
                      to="/hamburg/ottensen/2"
                      tag="li"
                      active-class="active">
                        <a>> Level 2</a>
                    </router-link>

                    <router-link 
                      to="/hamburg/ottensen/3"
                      tag="li"
                      active-class="active">
                        <a>> Level 3</a>
                    </router-link>

                    <router-link 
                      to="/hamburg/ottensen/4"
                      tag="li"
                      active-class="active">
                        <a>> Level 4</a>
                    </router-link>

            </router-link>

            <router-link 
              to="/hamburg/schlump" 
              tag="li"
              active-class="active">
                <a>S2S</a>
            </router-link>

            <router-link 
              to="/hamburg/ottensen"
              tag="li"
              active-class="active_A">
                <a href="javascript:void(0)">Ottensen - S2D &amp; Swipe</a> -->

                  <!-- SUBMENU 2 -->
              



      <!-- BERLIN ROUTE -->
<!--         <router-link 
        to="/berlin" 
        tag="li" 
        active-class="active" exact>
          <a>BERLIN</a>
      </router-link> -->

      <!-- FRANKFURT ROUTE -->
 <!--      <router-link 
        to="/frankfurt"
        tag="li"
        active-class="active">
          <a href="javascript:void(0)">FRANKFURT</a>

          <ul class="submenu_1">
          
            <router-link 
              to="/frankfurt/2" 
              tag="li"
              active-class="active">
                <a>> Level 2</a>
            </router-link>

            <router-link 
              to="/frankfurt/6" 
              tag="li"
              active-class="active">
                <a>> Level 6</a>
            </router-link>
          
          </ul>
      </router-link>


                  </ul>

              </router-link>
            </ul>
      </router-link> -->

      <!-- MUNICH ROUTE -->
<!--         <router-link 
          to="/munich" 
          tag="li" 
          active-class="active" exact>
            <a href="javascript:void(0)">MUNICH</a>

            <ul class="submenu_1">
              <router-link 
                to="/munich/0" 
                tag="li" 
                active-class="active">
                  <a>> Level 0</a>
              </router-link>

              <router-link 
                to="/munich/2" 
                tag="li" 
                active-class="active">
                  <a>> Level 2</a>
              </router-link>
            </ul>
          </router-link>

      <!-- PRAGUE ROUTE -->
<!--           <router-link 
            to="/prague"
            tag="li"
            active-class="active" exact>
              <a>PRAGUE</a>
          </router-link>
        </router-link>

      </ul>





    </div>  -->
  </div>

</template>

<script>

import axios from 'axios';

export default {
	name: 'Menu',
  data () {
    return {
      user: {},
      desk: {}
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


