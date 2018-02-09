<template>
  <div id="app">

    <myappHeader></myappHeader>


<!--     <h1>Find a coworker</h1>
    <div class="bodyText">
      <p>
      Lorem ipsum dolor amet synth chia meggings listicle live-edge, post-ironic occupy distillery tousled. Try-hard la croix brunch 8-bit, bitters you probably haven't heard of them pabst slow-carb art party. Keytar man bun occupy helvetica, bitters ethical vaporware heirloom authentic jean shorts wolf. Tattooed shaman blue bottle vexillologist kale chips, readymade hammock. Chia af lomo glossier squid kinfolk. Asymmetrical trust fund readymade schlitz activated charcoal seitan. Etsy pitchfork roof party vegan.
      <br><br>
      Pabst hot chicken marfa stumptown, lyft master cleanse kickstarter kombucha four dollar toast godard. Semiotics lo-fi blog bushwick messenger bag pour-over sartorial pork belly. Venmo quinoa typewriter art party yuccie fam. Quinoa subway tile trust fund master cleanse banh mi food truck.
      <br><br>
      Activated charcoal raclette affogato cliche +1 actually distillery scenester hammock chambray schlitz aesthetic deep v vice celiac. Cronut pork belly fam hashtag iceland vaporware bespoke narwhal blue bottle seitan. Coloring book vexillologist put a bird on it, PBRB hexagon jianbing letterpress franzen unicorn shabby chic kickstarter 90's. Biodiesel affogato franzen venmo leggings man braid post-ironic normcore glossier iPhone narwhal. Tumeric subway tile aesthetic hella bespoke vexillologist keytar copper mug franzen tumblr kale chips. Glossier cliche unicorn affogato, etsy single-origin coffee neutra.
      </p>
    </div> -->
  </div>
</template>

<script>

import Header from "./components/Header.vue"


export default {

        components: {
            myappHeader: Header,
        }
    }
</script>

<style>


/*validation woff2 - https://caniuse.com/#feat=woff2  */
@font-face {
font-family: 'MaisonNeue';
src: url('./assets/fonts/MaisonWEB-Regular.woff2') format('woff2');
font-weight: normal;
font-style: normal;
}

body {
  background-color: white;
  font-family: 'MaisonNeue', sans-serif;
}

.bodyText {
  font-size: 20px;
}

h1 {
font size: 45px;
}

</style>
