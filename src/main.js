import Vue from "vue";
import App from "./App.vue";
import Notifications from "vue-notification";
Vue.use(Notifications);
// import Notifications from 'vue-notification'

import store from "./store";

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
