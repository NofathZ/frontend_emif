<template>
  <div id="app">
    <router-view :key="$route.path"/>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
@import './assets/scss/_variable';
* {
  font-family: 'Poppins', sans-serif !important;
}
</style>
