<template>
  <div id="app">
    <notifications group="noti" position="bottom right" />
    <div class="container">
      <!-- TITLE : START -->
      <comp-title />
      <!-- TITLE : END -->

      <div class="row">
        <!-- LIST PRODUCT : START -->
        <product-list />
        <!-- LIST PRODUCT : END -->

        <!-- CART : START -->
        <cart-wrapper />
        <!-- CART : END -->
      </div>
      <!-- <notifications group="noti" position="bottom right" :duration="2000"/> -->
      <!-- <loading :class="{ show: isLoading }"/> -->
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import CompTitle from "./components/CompTitle";
import ProductList from "./components/ProductList";
import CartWrapper from "./components/CartWrapper";
import Loading from "./components/Loading";
export default {
  name: "app",
  components: {
    CompTitle,
    ProductList,
    CartWrapper,
    Loading,
  },
  data() {
    return {};
  },
  // computed: mapState([ 'isLoading' ]),
  mounted() {},
};
</script>

<style>
.notifications {
  padding-right: 10px;
  padding-bottom: 10px;
}
</style>
