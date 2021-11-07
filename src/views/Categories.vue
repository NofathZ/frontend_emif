<template>
  <div class="background-dark">
    <navbar-comp></navbar-comp>
    <categories-header>
      Informasi
    </categories-header>
    <box-wrapper></box-wrapper>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Header from "../components/Categories/Header.vue";
import BoxWrapper from "../components/Categories/CategoriesBoxWrapper.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    "navbar-comp": Navbar,
    "footer-comp": Footer,
    "categories-header": Header,
    "box-wrapper": BoxWrapper
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="scss">
.background-dark {
  background-color: #000F14;
}
</style>
