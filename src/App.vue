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
@import './assets/scss/_variable';

* {
  font-family: 'Poppins', sans-serif !important;
}
</style>
