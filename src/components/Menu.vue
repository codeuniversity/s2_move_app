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
      <ul class="burger-menu">
      <!-- HAMBURG ROUTE -->
        <router-link 
          to="/hamburg" 
          tag="li" 
          active-class="active">
          <a href="javascript:void(0)">HAMBURG</a>

          <!-- SUBMENU 1 / Select location -->
          <ul class="submenu_1">
            <router-link 
              to="/hamburg/schlump" 
              tag="li"
              active-class="active">
              <a>S2</a>

          <!-- SUBMENU 2 / Select building -->
              <ul class="submenu_2">
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
                <a href="javascript:void(0)">Ottensen - S2D &amp; Swipe</a>

                  <!-- SUBMENU 2 -->
              



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
      </router-link>

      <!-- MUNICH ROUTE -->
        <router-link 
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
          <router-link 
            to="/prague"
            tag="li"
            active-class="active" exact>
              <a>PRAGUE</a>
          </router-link>
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
<style scoped>

*{
  margin: 0;
  padding: 0;
}

*{
  box-sizing: border-box;
}

.burger-menu {
  width: 308px;
  background-color: yellow;
}
  .user-info {
  width: 100%;
  height: 231px;
  background-color: #1e212a;
  position: relative;
  z-index: 0;
  overflow: hidden;
}

.user-text{
  color: white;
  position: absolute;
  z-index: 2;
  left:0;
  right:0;
}

.user-text h2 {  
  position: absolute;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -0.9px;
  color: #f4f7fa;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
  top: 170px; 
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.desk-text {
  position: absolute;
  width: 100%;
  z-index: 2;
  top: 202px; 
}

.desk-text ul {
  position: absolute;

  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.desk-text ul li {
  display: inline;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.6px;
  text-align: center;
  color: #1e212a;
  padding:1px;
  background-color: #03ffb7;
}

.desk-text li {
  margin: 3px;
}

img {
  position: absolute;
  /*max-height:100%;*/
  /*object-fit: contain;*/
  width: 100%;
  margin: auto;
  top: 0; 
  left: 0; 
  bottom: 0; 
  right: 0;
  z-index: 1

}
</style>


