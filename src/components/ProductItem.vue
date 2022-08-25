<template>
  <div class="media product">
    <div class="media-left">
      <a href="#">
        <img class="media-object" :src="urlImage" alt="charmander" />
      </a>
    </div>
    <div class="media-body">
      <h4 class="media-heading">{{ product.name }}</h4>
      <p>
        {{ product.summary }}
      </p>
      <template v-if="product.canBuy">
        <input v-model="quantity" type="text" value="1" />
        <a @click.prevent="handleBuyProduct" href="#" class="price">
          {{ formatPrice }}
        </a>
      </template>
      <span v-else class="price">{{ formatPrice }}</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import { toCurrency, validateQuantity } from "../helpers";
import { NOTI_GREATER_THAN_ONE } from "../constans/config";

export default {
  name: "product-item",
  props: { product: Object },
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    urlImage() {
      return `/dist/images/${this.product.image}`;
    },
    formatPrice() {
      return toCurrency(this.product.price);
    },
  },
  methods: {
    ...mapActions({
      " actBuyProduct": "cart/actBuyProduct",
    }),
    handleBuyProduct() {
      const check = validateQuantity(this.quantity);
      const data = {
        product: this.product,
        quantity: parseInt(this.quantity),
      };
      if (check) {
        console.log("Hợp lệ ", this.quantity);

        this.actBuyProduct(data);
        // this.$store.dispatch("cart/actBuyProduct", data);
      } else {
        this.$notify(NOTI_GREATER_THAN_ONE);
      }
    },
  },
};
</script>

<style></style>
