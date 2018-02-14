import MapHamburg from './components/hamburg/MapHamburg.vue';
import MapBerlin from './components/berlin/MapBerlin.vue';
import MapFrankfurt from './components/frankfurt/MapFrankfurt.vue';
import MapMunich from './components/munich/MapMunich.vue';
import MapPrague from './components/prague/MapPrague.vue';

export const routes = [
// default route -> Hamburg
{ path: '', component: MapHamburg},
{ path: '/berlin', component: MapBerlin},
{ path: '/frankfurt', component: MapFrankfurt},
{ path: '/hamburg', component: MapHamburg},
{ path: '/munich', component: MapMunich},
{ path: '/prague', component: MapPrague}

];