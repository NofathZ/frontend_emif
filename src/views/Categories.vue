<template>
  <div>
    <navbar-comp></navbar-comp>
    <categories-header>
      Informasi
    </categories-header>
    <box-wrapper></box-wrapper>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  import Header from '../components/Categories/Header.vue'
  import BoxWrapper from '../components/Categories/CategoriesBoxWrapper.vue'
  import Footer from '../components/Footer.vue'

export default {
  components: {
    'navbar-comp': Navbar,
    'footer-comp': Footer,
    'categories-header': Header,
    'box-wrapper': BoxWrapper
  }
}
</script>

<style lang="scss">
// @import '../assets/scss/_variable';

// * {
//   font-family: 'Poppins', sans-serif !important;
// }
</style>