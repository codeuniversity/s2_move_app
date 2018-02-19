<template>
  <div class="container" @click="closeMenu()" :class="{'overlay':!openMenu}">
  <div class="navigation">

<!-- BURGER MENU ICON - Open menu when clicked.-->

    <div class="rectangle">
      <img src="../../assets/icons/menu.png" alt="Select a city." @click="openMenu =!openMenu">
    </div>

    <ul class="mainmenu" :class="{'isVisible':openMenu}">

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
        active-class="active" exact>
          <a href="javascript:void(0)">FRANKFURT</a>

          <div class="submenu_1">
            <router-link 
              to="/frankfurt/2" 
              tag="li"
              active-class="active" exact>
                <a>> Level 2</a>
            </router-link>

            <router-link 
              to="/frankfurt/6" 
              tag="li"
              active-class="active" exact>
                <a>> Level 6</a>
            </router-link>
          </div>

      </router-link>

      <!-- HAMBURG ROUTE -->
      <router-link 
        to="/hamburg" 
        tag="li" 
        active-class="active" exact>
          <a href="javascript:void(0)">HAMBURG</a>

          <div class="submenu_1">
            <router-link 
              to="/hamburg/schlump" 
              tag="li"
              active-class="active" exact>
                <a>S2C</a>
            </router-link>

            <router-link 
              to="/hamburg/ottensen"
              tag="li"
              active-class="active" exact>
                <a href="javascript:void(0)">S2D &amp; Swipe</a>
          
                  <div class="submenu_2">
                    <router-link 
                      to="/hamburg/ottensen/0"
                      tag="li"
                      active-class="active" exact>
                        <a>> Level 0</a>
                    </router-link>

                    <router-link 
                      to="/hamburg/ottensen/1"
                      tag="li"
                      active-class="active" exact>
                        <a>> Level 1</a>
                    </router-link>

                    <router-link 
                      to="/hamburg/ottensen/2"
                      tag="li"
                      active-class="active" exact>
                        <a>> Level 2</a>
                    </router-link>

                    <router-link 
                      to="/hamburg/ottensen/3"
                      tag="li"
                      active-class="active" exact>
                        <a>> Level 3</a>
                    </router-link>

                    <router-link 
                      to="/hamburg/ottensen/4"
                      tag="li"
                      active-class="active" exact>
                        <a>> Level 4</a>
                    </router-link>

                  </div>
              </router-link>
            </div>

        </router-link>

      <!-- MUNICH ROUTE -->
        <router-link 
          to="/munich" 
          tag="li" 
          active-class="active" exact>
            <a href="javascript:void(0)">MUNICH</a>

            <div class="submenu_1">
              <router-link 
                to="/munich/0" 
                tag="li" 
                active-class="active" exact>
                  <a>> Level 0</a>
              </router-link>

              <router-link 
                to="/munich/2" 
                tag="li" 
                active-class="active" exact>
                  <a>> Level 2</a>
              </router-link>
            </div>
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
  export default {
    data(){
      return {
        openMenu: true,
      };
    }
//     ,   
//      methods: {
//       closeMenu: function() {
//       const this.openMenu;
//       if (this.openMenu = true) {
//     this.openMenu = true;
//     } else {
//     this.openMenu = false;
// }
//         return this.openMenu;
//       }
//     }
  }

</script>


<style scoped>

*{
box-sizing: border-box;
}

/* Define dimensions of outer container*/
.container {
    position: fixed;
    height: 812px;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    z-index: 0;
}

/* ICON */

img {
  color: black;
  width: 40px;
  height: 40px;
  float: left;
  position: fixed;
  margin: auto;
  z-index: 2;
}

.rectangle {
  width: 40px;
  height: 40px;
  background-color: #4502da;
  position: fixed;
  top: 10px;
  z-index: 1;
}





/* BURGER MENU */

/*show menu bar when menu icon is clicked*/
.isVisible {
  display: none;
  transition: 1s;
  left: 0;
}

/* container hides rest of the page when menu icon is clicked*/
.overlay {
  background-color: RGBA(30, 33, 42, 0.3);
}


/* define a fixed width for the entire menu */

.navigation {
  width: 150px;
  max-height: 640px;
  position: fixed;
  top: 60px;
}


/* underline active routes*/
.active {
  text-decoration: underline;
}

/* reset lists to remove bullet points and padding */
.mainmenu {
  list-style: none;
  padding: 0;
  margin: 0;
}

/*transition for burger menu*/
.mainmenu {
  position: absolute;
  left: -150px;
  width: 150px;
  -webkit-animation: slide 0.5s forwards;
  animation: slide 0.5s forwards;
}

@-webkit-keyframes slide {
  100% { left: 0; }
}

@keyframes slide {
  100% { left: 0; }
}

/* make all links have padding and background color */
.mainmenu a {
  display: block;
  background-color: RGB(69, 2, 218);
  text-decoration: none;
  padding: 10px;
  color: white;
  font-size: 1em;
}

/* add hover behaviour */
.mainmenu a:hover {
    background-color: #889EFC;
}

/* hover behaviour for links inside .submenu */
.submenu_1 a:hover {
  background-color: #889EFC;
}

/* when hovering over a .mainmenu item,
  display the submenu inside it.
  Change the submenu's max-height from 0 to 500px;
*/
.mainmenu li:hover .submenu_1, 
.mainmenu .submenu_1 li:hover .submenu_2  {
  display: block;
  max-height: 300px;
}

/* overwrite padding and font-size of submenues */
.submenu_1 a, .submenu_2 a {
  font-size: 0.8em;
  padding: 5px 0px 5px 15px;
}

/* overwrite padding and font-size of submenue 2 */
.submenu_2 a {
  font-size: 0.8em;
  padding: 5px 20px;;
}

/* Set initial state of all submenus.
  Set it to max-height: 0, and hide the overflowed content.
  Use a transition to fade-in content.
*/
.submenu_1, .submenu_2 {
  overflow: hidden;
  max-height: 0;
  -webkit-transition: all 0.5s ease-out;
}

</style>