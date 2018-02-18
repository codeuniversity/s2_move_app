<template>

  <div class="locationMap">
      <div class="title">
        <h1>HAMBURG</h1>
      </div>
    <div class="mapHamburg">
    <svg width="640" height="480" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/2000/xlink">
 <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
      <a xlink:href="#target">
        <text x="200" y="24">Zoom in on shape below</text>
      </a>
      <g>
        <rect id="svg_3" height="25" width="535" y="376.2" x="54.8" stroke-width="0" stroke="#000000" fill="#03ffb7"/>
        <text class="streetname" y="388.2" x="304.8" text-anchor="middle" dominant-baseline="central" z-index="-1">V&ouml;lckersstra&szlig;e</text>
      </g>

        <g class="changeColor">
        <rect 
          class="building" id="svg_6"
          height="249" 
          width="136" 
          y="116.2" 
          x="87.8" 
          stroke-linecap="null" 
          stroke-linejoin="null" 
          stroke-dasharray="null" 
          stroke-width="0" 
          stroke="#000000" 
          fill="#d1d4d6"/>
        <text class="buildingname" text-anchor="middle" dominant-baseline="central" y="236.2" x="157.8">Building B</text>
        </g>
      
        <g class="changeColor">
        <router-link to="/prague" xlink:title="The link leads to a plan of Building A">
        <rect 
          class="building" id="svg_6" 
          height="149" 
          width="200" 
          y="50.2" 
          x="300" 
          stroke-linecap="null" 
          stroke-linejoin="null" 
          stroke-dasharray="null" 
          stroke-width="0" 
          stroke="#000000" 
          fill="#d1d4d6"/>
        </router-link>
        <text class="buildingname" text-anchor="middle" dominant-baseline="central" y="90.2" x="400" z-index="-1">Building <br> A</text>
        </g>

        
        <g class="changeColor">
          <a xlink:href="http://code.berlin/" xlink:title="The link leads to Code University's Homepage" xlink:show="new">
          <rect class="building" stroke="#000000" id="svg_7" height="135" width="285.99998" y="229.20001" x="251.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#d1d4d6" />
          </a>
          <text class="buildingname" text-anchor="middle" dominant-baseline="central" y="299.20001" x="391.8">Swipe</text>
  
        </g>
        <view id="target" viewBox="600 600 50 50"/>
        <rect x="600" y="600" width="50" height="50" fill="#d1d4d6"/>

      </svg>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Mymap'  
}

</script>

<style scoped>

.title {
  position: relative;
  top: 132px;
}

.mapHamburg {
  margin-top: 150px;
}

.building {
  transition: transform .9s;
}

.changeColor:hover .buildingname {
  fill: white;
}

.building:hover {
  fill: rgb(76,19,209);
  transform: scale(1.01,1.01);
  transform-origin: center;
}

text {
font-size: 25px;
font-family: 'MaisonNeue', sans-serif;
fill: black;
stroke: none;
text-anchor: middle;
}


@media (max-width: 427px) {
  .locationMap {
  display: none;
  }
}

.streetname {
  fill: white;
}

.buildingName {
}


</style>