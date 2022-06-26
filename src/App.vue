<template>
<!-- <main-wrapper />-->
  <router-view></router-view>
</template>

<script>
// import MainWrapper from './components/main-wrapper'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  components: {
    // MainWrapper
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'NEW_OR_POPULAR'
    ])
  },
  mounted () {
    this.GET_PRODUCTS_FROM_API()
      .then((response) => {
        if (response.data) {
          console.log(response.data)
          this.NEW_OR_POPULAR()
        }
      })
  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
#app{
  font-family: 'Roboto', sans-serif;
}
</style>
