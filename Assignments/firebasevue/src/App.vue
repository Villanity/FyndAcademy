<template>
  <navigationRoute/>
  <router-view/>
  <rerenderPosts></rerenderPosts>
  <vueX></vueX>
</template>

<script>
import navigationRoute from './components/postfirebase/navigationRoute.vue';
import rerenderPosts from './components/postfirebase/postRender.vue';
import vueX from './components/postfirebase/vuex.vue';

export default {
  name: 'App',
  components: {
    navigationRoute,
    rerenderPosts,
    vueX
  }
}
</script>

