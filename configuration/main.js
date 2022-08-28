const menusComponent = {
  template:
  `<a class="searchmenu" v-bind:aria-label="item.description" v-bind:href="item.link">
     <div class="bigger-fancy-text">
        <i v-bind:class="item.icon" aria-hidden="true"></i>
        <strong>{{ item.description }}</strong>
     </div>
   </a>`,
   props: ['item'] 
}

new Vue({
  el: '#app',
  data: {
    menus: Seed.findItMenu
  },
  components: {
    'menus-component': menusComponent
  }
});
