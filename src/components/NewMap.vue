<template>

<div id="myMap">

    <map-svg class="mapHB"></map-svg>

</div>

</template>
  

<script>

// import svgPanZoom from 'svg-pan-zoom'
import mapSvg from "@/assets/map.svg"


export default {
    name: "NewMap",
    components: {
        mapSvg
    }
    // mounted() {        
    //     var panZoomInstance = svgPanZoom('#example', {
    //     zoomEnabled: true,
    //     controlIconsEnabled: true,
    //     fit: true,
    //     center: true,
    //     minZoom: 1
    //     });  
    //     panZoomInstance.zoom(0.4)
    // }       
}        

</script>

</body>
</html>


<style>
    .mapHB {
        width: 260px;
        height: 400px;
        object-fit: cover;
        margin-left: 200px;
    }

    #svg-pan-zoom-controls {
        display: none;
    }

</style>    