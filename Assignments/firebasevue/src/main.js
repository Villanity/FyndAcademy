import { createApp } from 'vue'
import App from './App.vue'
import HomeRoute from './components/postfirebase/HomeRoute.vue';
import createPost from './components/postfirebase/createPost.vue';
import postsRoute from './components/postfirebase/postsRouter.vue';
import navigationRoute from './components/postfirebase/navigationRoute.vue';
import axios from 'axios';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/home',
        component: HomeRoute
    },
    {
        name: 'posts',
        path: '/posts',
        component: postsRoute
    },
    {
        path: '/nav',
        component: navigationRoute
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
axios.defaults.baseURL="https://vuefynd-default-rtdb.asia-southeast1.firebasedatabase.app/"
const app = createApp(App)
app.use(router)
app.mount('#app')
