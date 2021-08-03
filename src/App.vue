<template>
  <div id="app">
    <!-- <categories></categories> -->
    <router-view />
  </div>
</template>

<script>
  import Home from './views/Home.vue'
  import Categories from './views/Categories.vue'

  export default {
    components: {
      'home': Home,
      'categories': Categories
    }
  }
</script>

<style lang="scss">

</style>
