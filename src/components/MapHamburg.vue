<template>

  <div class="locationMap">
    <div class="mapHamburg">
    <svg width="640" height="480" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
 <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
      <g>
      <rect id="svg_3" height="25" width="535" y="376.2" x="54.8" stroke-width="0" stroke="#000000" fill="#03ffb7"/>
      <text class="streetname" y="388.2" x="304.8" text-anchor="middle" dominant-baseline="central" z-index="-1">V&ouml;lckersstra&szlig;e</text>
      </g>

        <g>
        <rect class="building" id="svg_6" height="249" width="136" y="116.2" x="87.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#d1d4d6"/>
        <text class="buildingname" text-anchor="middle" dominant-baseline="central" y="236.2" x="157.8">Building <br>B</text>
        </g>

        <g>
          <rect class="building" stroke="#000000" id="svg_7" height="135" width="285.99998" y="229.20001" x="251.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#d1d4d6" />
          <text class="buildingname" text-anchor="middle" dominant-baseline="central" y="299.20001" x="391.8">Swipe</text>
        </g>

      </svg>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Mymap',
}

</script>

<style scoped>

.building {
  transition: transform .9s;
}

.building:hover {
  fill: rgb(76,19,209);
  transform: scale(1.01,1.01);
}

text {
font-size: 25px;
font-family: 'MaisonNeue', sans-serif;
fill: black;
stroke: none;
text-anchor: middle;
}

.mapHamburg {
  
}

.streetname {
  fill: white;
}

.buildingName {

}


</style>