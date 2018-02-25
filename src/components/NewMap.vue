<template>

<div id="myMap">

    <map-svg id="mapHamburg" class="mapHB"></map-svg>

</div>

</template>
  

<script>

import svgPanZoom from 'svg-pan-zoom'
import mapSvg from "@/assets/map.svg"


export default {
    name: "NewMap",
    components: {
        mapSvg
    },
    mounted() {        
        var panZoomInstance = svgPanZoom('#mapHamburg', {
        zoomEnabled: true,
        controlIconsEnabled: true,
        fit: true,
        center: true,
        minZoom: 1,
        onZoom: function() { console.log(this.getZoom()) }
        });  
        panZoomInstance.zoom(0.4)
    }       
}        

</script>

</body>
</html>


<style>
    .mapHB {
        width: 100%;
        height: 100vh;
        position: fixed;
        left: 0;
        z-index: 0;
        top: 170px;
    }

    .svg-pan-zoom_viewport {
        max-width: 100%;
    }

    #svg-pan-zoom-controls {
        display: none;
    }

</style>    