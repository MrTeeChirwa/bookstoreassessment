<template>
<div>
    <main>
        <div class="grid">
            <i  v-for="(product, index) in products" :key="index">
            <article class="card product-item">
                <header class="card__header">
                    <h1 class="product__title">{{product.title}}</h1>
                </header>
                <div class="card__image">
                    <img :src="product.imageUrl" alt="">
                </div>
                <div class="card__content">
                    <h2 class="product__price"></h2>
                    <p class="product__description">{{product.description}}</p>
                </div>
                <div class="card__actions">
                    <button class="btn" v-on:click="addProductToCart(product)">Add to Cart</button>
                </div>
            </article>
            </i>
        </div>
    </main>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from "axios";

export default {
  data(){
      return {
          products: [],
      }
  },
    mounted () {
        axios.get("http://localhost:3000/").then(response => {
           this.products = response.data;
           console.log(response.data);
        });
  },
  methods: { 
          ...mapActions([
      'addProduct',
    ]),

      addProductToCart(book){
          this.addProduct(book);
          console.log(this.cartProducts);
      }
  }
};
</script>
