<template>
  <div class="navigation">

      <ul class="mainmenu">
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
              active-class="active_A" exact>
                <a>Schlump - S2 Commerce</a>
            </router-link>

            <router-link 
              to="/hamburg/ottensen"
              tag="li"
              active-class="active_A" exact>
                <a href="javascript:void(0)">Ottensen - S2D &amp; Swipe</a>
          
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

</template>

<style scoped>

*{
box-sizing: border-box;
}

/* define a fixed width for the entire menu */
.navigation {
  width: 250px;
}

/* underline active routes*/
.active {
    text-decoration: underline;
}

/* underline*/
.mainmenu .active > .submenu_1 li { 
    background-color: yellow;
}

/* reset lists to remove bullet points and padding */
.mainmenu {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* make all links have padding and background color */
.mainmenu a {
  display: block;
  background-color: RGB(69, 2, 218);
  text-decoration: none;
  padding: 20px;
  color: white;
  font-size: 1.5em;
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
  max-height: 500px;
}

/* overwrite padding and font-size of submenues */
.submenu_1 a, .submenu_2 a {
  font-size: 1.2em;
  padding: 10px 0px 10px 20px;
}

/* overwrite padding and font-size of submenue 2 */
.submenu_2 a {
  font-size: 1.2em;
  padding: 10px 40px;;
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