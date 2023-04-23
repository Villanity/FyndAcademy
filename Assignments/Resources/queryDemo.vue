<template>
    <div>
        <nav-bar/>
        <h1>Query Component</h1>
        <!-- <form>
        <input type="text"><br><br>
        <router-link :to="{path:'/querydemo',query:{name:'peter'},}">User Peter</router-link>
    </form> -->

    the id is {{id}}<br>
    the username is {{username}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:this.$route.query.id,
            username:this.$route.query.username
        }
    }
}
</script>NavBar