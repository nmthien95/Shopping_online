import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutation";
import moduleCart from "./cart";
import moduleProduct from "./product";

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state,
  actions,
  getters,
  mutations,
  modules: {
    cart: moduleCart,
    product: moduleProduct
  }
});
export default store;
