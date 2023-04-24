<template>
    <h1>Posts Route</h1>

    <table class="table" v-for="post in posts" :key="post.id">
  <thead>
    <tr>
      <th >Title</th>
      <th >Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{ post.title }}</td>
      <td>{{ post.description }}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
import axios from 'axios';


export default {
    name: 'postsRoute',
    data() {
        return {
            title: '',
            description: '',
            posts:[]
        }
    },
    mounted() {
        this.getPosts();
    },
        methods: {
        getPosts() {
            axios.get('post.json')
                .then((response) => {
                    console.log(response.data);
                    this.posts = response.data;
                    this.title = this.posts.title,
                    this.description = this.posts.description
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    },
}

</script>