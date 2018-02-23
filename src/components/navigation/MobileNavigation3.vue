<template>
  <div class="container">
  <div class="zap-slideout">
    <div class="zap-slideout-opener"
         @click="toggle">{{openerText}}</div>

    <ul class="zap-slideout-menu">
      <li class="zap-slideout-menu-item">
        <p>SILKE JUNKER</p>
        <img class="zap-emoji" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/19332/zap-emoji.svg" alt="Zap Emoji" />

      </li>
      <li class="zap-slideout-menu-item"
        v-for="item in menu">{{item}}</li>
      <li class="zap-slideout-menu-item--small"
        v-for="item in smallMenu">{{item}}</li>
    </ul>
  </div>
</script>



</div>


</template>



<script>

  // export default {
  //   data: () => ({
  //   openerText: 'Open',
  //   isOpen: false,
  //   menu: [ 'Berlin', 'Hamburg', 'Frankfurt' ],
  //   smallMenu: [ 'Ottensen', 'Schlump', 'Shenanigans' ]
  // }),
  //   methods: {
  //   open() {
  //     this.openerText = 'Close';
  //     this.isOpen = true;
  //   },
  //   close() {
  //     this.openerText = 'Open';
  //     this.isOpen = false;
  //   },
  //   toggle() {
  //     if (this.isOpen) {
  //       this.close();
  //     } else {
  //       this.open();
  //     }
  //   }
  // }
  //   }

  /*
Zap Slideout - Vue Component

This is our component definition. It tells Vue to look for our template, which is the little snippet of HTML that will be used for our component. Every time we use our component in HTML as <zap-slideout>, this template gets plopped into our page, which makes it reusable without pasting it everywhere! */

// Vue.component('zap-slideout', {
//   template: '#zap-slideout',
//   data: () => ({
//     openerText: 'Open',
//     isOpen: false,
//     menu: [ 'Home', 'Work', 'Contact' ],
//     smallMenu: [ 'Tips', 'Resources', 'Shenanigans' ]
//   }),
//   methods: {
//     open() {
//       this.openerText = 'Close';
//       this.isOpen = true;
//     },
//     close() {
//       this.openerText = 'Open';
//       this.isOpen = false;
//     },
//     toggle() {
//       if (this.isOpen) {
//         this.close();
//       } else {
//         this.open();
//       }
//     }
//   }
// });

/*
Start the engines...

Vue.js has to be started in order for your components to work in your page. Passing 'body' to the `el` property tells Vue it should keep track of everything inside our <body> tag. In this case, everything inside CodePen's HTML panel could be considered our page body.
*/

// let app = new Vue({
//   el: 'body'
// });

</script>


<style scoped>

*{
box-sizing: border-box;
}

.container {
  height: 300px;
  width: 300px;
  background-color: RGB(69, 2, 218);
}

</style>