import VueRouter from "vue-router";

import MapHamburg from './components/hamburg/MapHamburg.vue';
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
import Login from './components/Login.vue';



// export const routes = [
// // default route -> Hamburg
// { path: '/', component: Login},
// { path: '/login', component: Login},
// { path: '/home', component: Home},
// { path: '', component: MapHamburg},
// { path: '/berlin', component: MapBerlin},
// { path: '/frankfurt', component: MapFrankfurt},
// { path: '/hamburg', component: MapHamburg},
// { path: '/hamburg/schlump', component: MapHamburgSchlump},
// { path: '/hamburg/ottensen', component: MapHamburgOttensen},
// { path: '/hamburg/ottensen/0', component: HamburgLevel0},
// { path: '/hamburg/ottensen/1', component: HamburgLevel1},
// { path: '/hamburg/ottensen/2', component: HamburgLevel2},
// { path: '/hamburg/ottensen/3', component: HamburgLevel3},
// { path: '/hamburg/ottensen/4', component: HamburgLevel4},
// //   children: [
// //     { path: ':id', component: MapHamburgOttensen}, 
// //     { path: ':id/schlump', component: MapHamburgSchlump}
// // ]}, 
// // { path: '/hamburg/hamburg-buildings/:acr', component: BHamburg},
// // { path: '/hamburg/hamburg-buildings'/:acr, component: SwipeHamburg},
// { path: '/munich', component: MapMunich},
// { path: '/prague', component: MapPrague}

// ];

const router = new VueRouter({
	mode: "history",
	routes: [
		{ path: '*', component: Login },
		{ path: '/login', component: Login },
		{ 
			path: '/home', 
			component: Home,
		 	meta: {
      			requiresAuth: true
      		}	
      	},
		{ path: '/', component: MapHamburg},
		{ path: '/berlin', component: MapBerlin},
		{ path: '/frankfurt', component: MapFrankfurt},
		{ path: '/hamburg', component: MapHamburg},
		{ path: '/hamburg/schlump', component: MapHamburgSchlump},
		{ path: '/hamburg/ottensen', component: MapHamburgOttensen},
		{ path: '/hamburg/ottensen/0', component: HamburgLevel0},
		{ path: '/hamburg/ottensen/1', component: HamburgLevel1},
		{ path: '/hamburg/ottensen/2', component: HamburgLevel2},
		{ path: '/hamburg/ottensen/3', component: HamburgLevel3},
		{ path: '/hamburg/ottensen/4', component: HamburgLevel4},
		{ path: '/munich', component: MapMunich},
		{ path: '/prague', component: MapPrague}

	]
});

export default router;


