<template>
  <ul>
    <li><router-link to='/home'>Home</router-link></li>
    <li><router-link to="/posts">Posts</router-link></li>
    <li><router-link to="/createpost">Create Post</router-link></li>
  </ul>

</template>

<script>

    export default {
        name: 'navigationRoute'
    }

</script>