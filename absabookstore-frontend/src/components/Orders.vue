<template>
    <div>
        <ul class="orders">
            <h1 v-if="!hasOrder()">No Orders Here!</h1>
            <i v-for="(order, index) in orders" :key="index">
            <li class="orders__item">
                <h1>Order - # {{order._id}}  - {{order.items.length}}</h1>
                <ul class="orders__products">
                    <i v-for="(book, index) in order.items" :key="index">
                    <li class="orders__products-item">{{book.title}}</li>
                    </i>
                </ul>
            </li>
            </i>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
      return {
          orders: [],
      }
  },
    methods: {
    hasOrder() {
      return this.orders.length > 0;
    },
    },
    mounted () {
        axios.get("http://localhost:3000/orders").then(response => {
           this.orders = response.data;
           console.log(response.data);
        });
  }
};
</script>
