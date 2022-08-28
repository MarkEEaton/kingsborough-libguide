const menusComponent = {
  template:
  `<div class="bigger-fancy-text">
    <i v-bind:class="item.icon" aria-hidden="true"></i>
    <strong>{{ item.description }}</strong>
  </div>`,
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
