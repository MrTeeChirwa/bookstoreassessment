import Vue from "vue";
import Router from "vue-router";
import Index from "../components/Index.vue";
import CartCheckout from "../components/CartCheckout";
import Orders from "../components/Orders";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Index,
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: CartCheckout,
    },
    {
      path: "/orders",
      name: "order",
      component: Orders,
    },
  ],
});
