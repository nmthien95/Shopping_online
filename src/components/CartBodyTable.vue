<template>
  <tbody id="my-cart-body">
    <!-- CART BODY -->
    <template v-if="items.length">
      <cart-body-item v-for="(item, index) in items" :key="index" />
    </template>

    <tr v-else>
      <th colspan="6">{{ NOTI_EMPTY_PRODUCT }}</th>
    </tr>
  </tbody>
</template>

<script>
import { NOTI_EMPTY_PRODUCT } from "../constans/config";
import CartBodyItem from "./CartBodyItem";
import { mapState } from "vuex";
export default {
  name: "cart-body-table",
  data() {
    return {
      NOTI_EMPTY_PRODUCT,
    };
  },
  components: {
    CartBodyItem,
  },
  computed: {
    ...mapState({ items: (state) => state.cart.listCarts }),
  },
};
</script>

<style>
</style>
