const menusComponent = {
  template:
  `<a class="searchmenu" v-bind:aria-label="item.description" v-bind:href="item.link">
     <div class="bigger-fancy-text">
        <i v-bind:class="item.icon" aria-hidden="true"></i>
        <strong>{{ item.description }}</strong>
     </div>
   </a>`
}

new Vue({
  el: '#app',
  data: {
    findIt: Seed.findItMenu,
    services: Seed.servicesMenu,
    aboutUs: Seed.aboutUsMenu,
    locationAndHours: Seed.locationAndHoursMenu,
    help: Seed.helpMenu
  },
  components: {
    'menus-component': menusComponent
  }
});
