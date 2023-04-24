<template>

    <h1>Create Post Route</h1>

    <form @submit.prevent="onCreatePost()">
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-group" v-model="title">
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <input type="text" class="form-group" v-model="description">
        </div>
        <div>
            <button class="btn btn-success" >Create Post</button>
        </div>
    </form>

</template>

<script>

    import axios from 'axios';

    export default {
        name: 'createPost',
        data(){
            return {
                title:'',
                description:''
            }
        },
        methods: {
            onCreatePost(){
                axios.post("post.json", {
                    title: this.title,
                    description: this.description
                    })
                    .then((response) => response.json())
            }
        }
    }

</script>