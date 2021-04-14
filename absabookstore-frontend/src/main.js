// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import "./assets/css/main.css";
import "./assets/css/product.css";
import "./assets/css/orders.css";
import store from "@/store";

const httpFetch = axios.create({
  baseURL: "http://localhost:3000",
});

Vue.prototype.$httpFetch = httpFetch;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>",
});
