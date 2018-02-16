// HAMBURG ROUTES
import MapHamburg from './components/hamburg/MapHamburg.vue';
  import MapHamburgOttensen from './components/hamburg/hamburg-locations/MapHamburgOttensen.vue';
    import HamburgLevel0 from './components/hamburg/hamburg-locations/hamburg-levels/HamburgLevel0.vue';
    import HamburgLevel1 from './components/hamburg/hamburg-locations/hamburg-levels/HamburgLevel1.vue';
    import HamburgLevel2 from './components/hamburg/hamburg-locations/hamburg-levels/HamburgLevel2.vue';
    import HamburgLevel3 from './components/hamburg/hamburg-locations/hamburg-levels/HamburgLevel3.vue';
    import HamburgLevel4 from './components/hamburg/hamburg-locations/hamburg-levels/HamburgLevel4.vue';
  import MapHamburgSchlump from './components/hamburg/hamburg-locations/MapHamburgSchlump.vue';

// BERLIN ROUTE
import MapBerlin from './components/berlin/MapBerlin.vue';

// FRANKFURT ROUTES
import MapFrankfurt from './components/frankfurt/MapFrankfurt.vue';
  import FrankfurtLevel2 from './components/frankfurt/frankfurt-levels/FrankfurtLevel2.vue';
  import FrankfurtLevel6 from './components/frankfurt/frankfurt-levels/FrankfurtLevel6.vue';

// MUNICH ROUTES
import MapMunich from './components/munich/MapMunich.vue';
  import MunichLevel0 from './components/munich/munich-levels/MunichLevel0.vue';
  import MunichLevel2 from './components/munich/munich-levels/MunichLevel2.vue';

// PRAGUE ROUTE
import MapPrague from './components/prague/MapPrague.vue';

export const routes = [
// default route -> Hamburg
{ path: '', component: MapHamburg},
{ path: '/berlin', component: MapBerlin},
{ path: '/frankfurt', component: MapFrankfurt},
{ path: '/frankfurt/2', component: FrankfurtLevel2},
{ path: '/frankfurt/6', component: FrankfurtLevel6},
{ path: '/hamburg', component: MapHamburg},
{ path: '/hamburg/schlump', component: MapHamburgSchlump},
{ path: '/hamburg/ottensen', component: MapHamburgOttensen},
{ path: '/hamburg/ottensen/0', component: HamburgLevel0},
{ path: '/hamburg/ottensen/1', component: HamburgLevel1},
{ path: '/hamburg/ottensen/2', component: HamburgLevel2},
{ path: '/hamburg/ottensen/3', component: HamburgLevel3},
{ path: '/hamburg/ottensen/4', component: HamburgLevel4},
{ path: '/munich', component: MapMunich},
{ path: '/munich/0', component: MunichLevel0},
{ path: '/munich/0', component: MunichLevel2},
{ path: '/prague', component: MapPrague}

];