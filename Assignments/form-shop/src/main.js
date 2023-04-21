import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Child from './components/ChildComponent.vue';
import Parent from './components/ParentComponent.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: App },
    { path: '/child', component: Child },
    { path: '/parent', component: Parent }
  ]
});

createApp(App).use(router).mount('#app');