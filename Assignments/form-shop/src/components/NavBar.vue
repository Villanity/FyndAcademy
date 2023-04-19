<template>
    <div>
      <p v-if="Stock > 90"> Greater than 90</p>
      <p v-else-if="Stock < 50 && Stock > 10"> Less than 90</p>
      <p v-else> Almost Gone</p>
      <ul>
        <li v-for="product in Products" :key="product.id">{{ product.product }}</li>

        <p style="padding:20px" v-for="product in Products" :key="product.id" :style="{backgroundColor: product.color, color: product.text, width: product.width} "> There are {{ cart }} items in the cart</p>
        <button class="btn btn-success" v-on:click="addToCart">Add to Cart</button>
        <button class="btn btn-danger" v-on:click="removeFromCart">Remove From Cart</button>
        {{ stockInfo }}
      </ul>
      <button class="btn btn-primary" @click="createPost()">Create Post</button>
    </div>

   </template>
   
   <script>
   import axios from 'axios';

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

          if (this.cart != 0) {
            this.cart -= 1;
          }
          else {
            this.cart = 0;
          }
            
        },
        createPost() {
        try {
        const response = axios.post('https://jsonplaceholder.typicode.com/posts', {
          title: 'New Post',
          body: 'This is the body of the new post',
          userId: 101
        });
        console.log(response.data, "Posted Successfully");
      } catch (error) {
        console.error(error);
      }
    }
     },
     computed: {
            stockInfo () {
                return this.onSale + '' + this.Stock;
                
            }
        }
   }
   </script>