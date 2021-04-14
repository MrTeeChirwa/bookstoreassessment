<template>
    <div>
        <div class="backdrop"></div>
            <header class="main-header">
                <button id="side-menu-toggle">Menu</button>
                <nav class="main-header__nav">
                    <ul class="main-header__item-list">
                        <li class="main-header__item">
                            <router-link to="/"> Shop</router-link>
                        </li>
                        <li class="main-header__item">
                            <router-link to="/checkout">Cart</router-link>
                        </li>
                        <li class="main-header__item">
                            <router-link to="/orders">Orders</router-link>
                        </li>
                        <li>
                            <button class="btn btn-small btn-info btn-popup">
                                Cart
                                <span class="btn-circle" v-if="hasProduct()"> 
                                    {{ getProductsInCart.length }}
                                </span>
                                <img  src="@/assets/images/cart.svg" alt="Cart Icon">
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
    </div>
</template>

<script>
import { mapGetters} from 'vuex';
export default {
  methods: {
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
    ]),
  },
};
</script>