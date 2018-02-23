<template>
  <div id="app">
    <div>
      <myappHeader></myappHeader>
    </div>

        <!-- MOBILE NAVIGATION -->
    <div class="mobile">
      <my-mobile-navigation></my-mobile-navigation>
    </div>

        <!-- DESKTOP NAVIGATION -->
    <div class="desktop navigation">
        <my-desktop-navigation></my-desktop-navigation>
    </div>

      
      <!-- MAPS -->
        <div class="map">
          <router-view></router-view>
        </div>

  </div>
</template>

<script>

// import components
import Header from "./components/Header.vue"
import Mymap from "./components/hamburg/MapHamburg.vue"
import DesktopNavigation from "./components/navigation/DesktopNavigation.vue"
import MobileNavigation from "./components/navigation/MobileNavigation3.vue"

export default {

        components: {
            'myappHeader': Header,
            'myMap': Mymap,
            'my-desktop-navigation': DesktopNavigation,
            'my-mobile-navigation': MobileNavigation
        }
    }
</script>

<style>

@font-face {
font-family: 'MaisonNeue';
src: url('./assets/fonts/MaisonWEB-Regular.woff2') format('woff2');
font-weight: normal;
font-style: normal;
}

/* Show only elements of mobile version*/
@media (min-width: 800px) {
  .mobile {
  display: none;
  }
}

/* Show all elements for desktop version*/
@media (max-width: 800px) {
  .desktop {
  display: none;
  }
}

body {
  background-color: white;
  font-family: 'MaisonNeue', sans-serif;
  margin: 0;
}

/*Set position of desktop nav bar*/
.desktop .navigation {
  position: absolute;
  top: 180px;
  width: 600px;
}

.map {
position: absolute;
top: 180px;
left: 300px ;
width: 500px;
height: 600px;
}


.bodyText {
  font-size: 20px;
}

h1 {
font size: 45px;
}

</style>
