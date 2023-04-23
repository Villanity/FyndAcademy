<template>
    <div>
        <nav-bar/>
        <h2>User Component</h2>
     the id is {{userid}}
      the location is {{location}}
    </div>
</template>
<script>
export default {
    data(){
        return{
userid:this.$route.params.userid,
location:this.$route.params.location

        }
    }
}
</script>