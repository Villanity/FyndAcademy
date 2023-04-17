<template>
    <div>
      <p v-if="Stock > 90"> Greater than 90</p>
      <p v-else-if="Stock < 50 && Stock > 10"> Less than 90</p>
      <p v-else> Almost Gone</p>
      <ul>
        <li v-for="product in Products" :key="product.id">{{ product.product }}</li>

        <p style="padding:20px" v-for="product in Products" :key="product.id" :style="{backgroundColor: product.color, color: product.text, width: product.width} "> There are {{ cart }} items in the cart</p>
        <button v-on:click="addToCart">Add to Cart</button>
        <button v-on:click="removeFromCart">Remove From Cart</button>
        {{ stockInfo }}
      </ul>
    </div>
   </template>
   
   <script>
   export default {
     name: 'NavBar',
     data(){
        return {
            urlMain : "https://google.com",
            Stock: 0,
            Products : [
                {id: 1 , product: "Laptops", color: "green", text: "white", width: "50vw"},
                {id: 2 , product: "Mobile", color: "blue", text: "white", width: "50vw"},
                {id: 3 , product: "Computers", color: "red", text: "white", width: "50vw"}
        ],
        cart : 0,
        onSale : true,
        }
     },
     methods: {
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            this.cart -= 1;
        }
     },
     computed: {
            stockInfo () {
                return this.onSale + '' + this.Stock;
                
            }
        }
   }
   </script>