import { createApp } from 'vue';
import App from './App.vue';
import HomeRoute from './components/postfirebase/HomeRoute.vue';
import createPost from './components/postfirebase/createPost.vue';
import postsRoute from './components/postfirebase/postsRouter.vue';
import axios from 'axios';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';

const routes = [
    {
        path: '/home',
        component: HomeRoute
    },
    {
        path: '/posts',
        component: postsRoute
    },
    {
        path: '/createpost',
        component: createPost
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes:routes
})

// Create a new store instance.
const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })


axios.defaults.baseURL = "https://vuefynd-default-rtdb.asia-southeast1.firebasedatabase.app/";
const app = createApp(App)
app.use(router, store)
app.mount('#app')
