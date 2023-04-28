<template>
    <div>
      <button @click="rerenderPosts">Refresh Posts</button>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
import axios from 'axios';

  export default {
    name: 'rerenderPosts',
    data() {
      return {
        posts: [],
        componentKey: 0
      };
    },
    methods: {
      fetchPosts() {
        // Fetch posts from API
        axios.get('post.json').then(response => {
          this.posts = response.data;
        });
      },
      rerenderPosts() {
        // Increment the componentKey to re-render the component
        this.componentKey++;
      }
    },
    mounted() {
      this.fetchPosts();
    }
  };
  </script>
  