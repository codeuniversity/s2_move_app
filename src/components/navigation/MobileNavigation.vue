<template>
  <div class="navigation" >

    <div class="rectangle">
      <img src="../../assets/icons/menu.png" alt="Select a city.">
    </div>

    <ul>
      <router-link to="/berlin" tag="li" active-class="active" exact><a>Berlin</a></router-link>
      <router-link to="/frankfurt" tag="li" active-class="active" exact><a>Frankfurt</a></router-link>
            <!-- HAM -->
      <router-link class="dropdown" to="/hamburg" tag="li" active-class="active" exact>
        <a href="javascript:void(0)" class="dropbtn">Hamburg</a>
        <div class="dropdown-content">
          <router-link 
              to="/hamburg/schlump" 
              active-class="active" exact>
              <a>Schlump - S2 Commerce</a>
          </router-link>

          <router-link 
            class="dropdown"
            to="/hamburg/ottensen" 
            active-class="active" exact>
            <a href="javascript:void(0)" class="dropbtn">Ottensen - S2D &amp; Swipe</a>
            
            <div class="dropdown-content">  
              <router-link
                to="/hamburg/ottensen/0"
                active-class="active" exact>
                <a>Level 0</a>
              </router-link>

              <router-link
                to="/hamburg/ottensen/1"
                active-class="active" exact>
                <a>Level 1</a>
              </router-link>

              <router-link
                to="/hamburg/ottensen/2"
                active-class="active" exact>
                <a>Level 2</a>
              </router-link>

              <router-link
                to="/hamburg/ottensen/3"
                active-class="active" exact>
                <a>Level 3</a>
              </router-link>

              <router-link
                to="/hamburg/ottensen/4"
                active-class="active" exact>
                <a>Level 4</a>
              </router-link>
            </div>

          </router-link>
        </div>

      </router-link>

      <router-link to="/munich" tag="li" active-class="active" exact><a>Munich</a></router-link>
      <router-link to="/prague" tag="li" active-class="active" exact><a>Prague</a></router-link>
    </ul>
  </div>


</template>

<style scoped>



*{
box-sizing: border-box;
}

@media (max-width: 800px) {
  .navigation {
  display: none;
  }
}

/* ICON */

img {
  color: black;
  width: 50px;
  height: 50px;
  float: left;
  position: fixed;
  margin: auto;
}

.rectangle {
  width: 50px;
  height: 50px;
  background-color: #4502da;
  position: fixed;

}


/* NAV BAR */

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

li {
    float: left;
    border-right: 1px solid #E8ECEF;
    background-color: #3C4049;
}

.active {
    border-top: 1px solid #E8ECEF;
}

li a, .dropbtn {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 25px;
    text-decoration: none;
}

li a:hover, .dropdown:hover .dropbtn, li.active {
    background-color: #03FFB7;
}

li.dropdown {
    display: block;
}

.dropdown-content {
    display: none;
    position: absolute;
    min-width: 160px;
    max-width: 250px;
/*    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);*/
    z-index: 1;
    background-color: #3C4049;
}

.dropdown-content a {
    color: white;
    padding: 5px 10px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

.dropdown-content a:hover 
{background-color: #03FFB7;}

.dropdown:hover .dropdown-content {
    display: block;
}

</style>