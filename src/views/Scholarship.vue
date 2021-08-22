<template>
  <div>
    <navbar-comp></navbar-comp>
    <header-comp></header-comp>
    <list-scholar-wrapper></list-scholar-wrapper>
    <footer-comp></footer-comp>
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Scholarship/Header.vue'
import ListScholarWrapper from '../components/Scholarship/ListScholarWrapper.vue'

export default {
  components: {
    'navbar-comp': Navbar,
    'footer-comp': Footer,
    'header-comp': Header,
    'list-scholar-wrapper': ListScholarWrapper
  }
}

</script>

<style lang="scss" scoped>



</style>
