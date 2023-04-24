<template>
  <navigationRoute/>
  <router-view/>
</template>

<script>
import navigationRoute from './components/postfirebase/navigationRoute.vue';

export default {
  name: 'App',
  components: {
    navigationRoute,
  }
}
</script>

