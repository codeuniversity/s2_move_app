<template>
  <div id="app">
    <div>
      <myappHeader></myappHeader>
    </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <!-- MOBILE NAVIGATION -->
    <div class="mobile">
      <p>Mobile Nav</p>
      <my-mobile-navigation></my-mobile-navigation>
    </div>

        <!-- DESKTOP NAVIGATION -->
    <div class="desktop">
        <p>Desktop Nav</p>
        <my-desktop-navigation></my-desktop-navigation>
    </div>

      
      <!-- to load the router map template -->
        <div class="map">
          <router-view></router-view>
        </div>

  </div>
</template>

<script>

import Header from "./components/Header.vue"
import Mymap from "./components/hamburg/MapHamburg.vue"
import DesktopNavigation from "./components/navigation/DesktopNavigation.vue"
import MobileNavigation from "./components/navigation/MobileNavigation.vue"

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

@media (min-width: 800px) {
  .mobile {
  display: none;
  }
}

@media (max-width: 800px) {
  .desktop {
  display: none;
  }
}

body {
  background-color: white;
  font-family: 'MaisonNeue', sans-serif;
}

.map {
position: absolute;
top: 200px;
left: 200px ;
width: 600px;
height: 600px;
}


.bodyText {
  font-size: 20px;
}

h1 {
font size: 45px;
}

</style>
