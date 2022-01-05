import Vue from "vue";
import App from "./App.vue";
import router from './router'

Vue.config.productionTip = false;
// require('dotenv').config()
{
  /* // new Vue({
//   render: h => h(App),
//   mounted: function () {
//     Metro.init();
//   },
// }).$mount('#app') */
}
new Vue({
  router,
  render: (h) => h(App),
  el: "#app",
  data: {},
//   mounted: function () {
//     Metro.init();
// }
});
