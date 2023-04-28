<template>
    <div>
        <h3>Vuex Demo</h3>

        {{ count }}
        <button @click="increment">Increase it</button>


    </div>
</template>

<script>

export default {
    name: 'vueX',
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        increment() {
            this.$store.commit('increment')
            console.log(this.$store.state.count)
        }
    },
    actions: {
        incrementCommit ({ commit }) {
        commit('increment')
  }
}

}


</script>