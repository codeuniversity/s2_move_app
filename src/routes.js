import VueRouter from "vue-router";

import MapHamburgOttensen from './components/hamburg/hamburg-locations/MapHamburgOttensen.vue';
import HamburgLevel0 from './components/hamburg/hamburg-locations/hamburg-levels/HamburgLevel0.vue';
import HamburgLevel1 from './components/hamburg/hamburg-locations/hamburg-levels/HamburgLevel1.vue';
import HamburgLevel2 from './components/hamburg/hamburg-locations/hamburg-levels/HamburgLevel2.vue';
import HamburgLevel3 from './components/hamburg/hamburg-locations/hamburg-levels/HamburgLevel3.vue';
import HamburgLevel4 from './components/hamburg/hamburg-locations/hamburg-levels/HamburgLevel4.vue';
import MapHamburgSchlump from './components/hamburg/hamburg-locations/MapHamburgSchlump.vue';
import MapBerlin from './components/berlin/MapBerlin.vue';
import MapFrankfurt from './components/frankfurt/MapFrankfurt.vue';
import MapMunich from './components/munich/MapMunich.vue';
import MapPrague from './components/prague/MapPrague.vue';
import Home from './components/Home.vue';


const router = new VueRouter({
	mode: "history",
	routes: [
		{ path: '*', component: Home },
		{ path: '/berlin', component: MapBerlin },
		{ path: '/frankfurt', component: MapFrankfurt },
		{ path: '/hamburg', component: MapHamburgOttensen, children: [
			{ path: '/schlump', component: MapHamburgSchlump },
			{ path: '/ottensen', component: MapHamburgOttensen, children: [ 
				{ path: '/0', component: HamburgLevel1 },
				{ path: '/1', component: HamburgLevel2 },
				{ path: '/2', component: HamburgLevel3 },
				{ path: '/4', component: HamburgLevel4 }
			]}
		]},
		{ path: '/munich', component: MapMunich },
		{ path: '/prague', component: MapPrague }
	]
});

export default router;


