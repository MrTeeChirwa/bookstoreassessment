import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notebooks: [],

    cartProducts: [],
  },

  getters: {
    getProductsInCart: (state) => state.cartProducts,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CLEAR_CART: (state) => {
      state.cartProducts = [];
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit("ADD_PRODUCT", product);
    },
    removeProduct: (context, index) => {
      context.commit("REMOVE_PRODUCT", index);
    },
    clearCart: (context) => {
      context.commit("CLEAR_CART");
    },
  },
});
