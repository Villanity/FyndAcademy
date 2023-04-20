<template>
  <NavBar></NavBar>
  <ParentComponent></ParentComponent>
</template>

<script>
import NavBar from './components/NavBar.vue';
import ParentComponent from './components/ParentComponent.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    ParentComponent
  }
}
</script>
