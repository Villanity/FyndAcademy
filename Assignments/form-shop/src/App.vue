<template>

  <h4>App components</h4>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components : {
    NavBar
  }
}
</script>
