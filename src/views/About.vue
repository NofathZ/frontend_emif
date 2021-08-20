<template>
  <div>
    <navbar-comp></navbar-comp>
    <header-comp>
      Tentang
    </header-comp>
    <box-wrapper></box-wrapper>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  import Header from '../components/Categories/Header.vue'
  import BoxWrapper from '../components/About/BoxWrapper.vue'
  import Footer from '../components/Footer.vue'

  export default {
    components: {
      'navbar-comp': Navbar,
      'header-comp': Header,
      'box-wrapper': BoxWrapper,
      'footer-comp': Footer
    }
  }
</script>

<style lang="scss" scoped>
// @import '../assets/scss/_variable';

// * {
//   font-family: 'Poppins', sans-serif !important;
// }
</style>
