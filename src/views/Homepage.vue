<template>
  <div>
    <navbar-comp></navbar-comp>
    <header-comp></header-comp>
    <desc-comp></desc-comp>
    <new-post-comp></new-post-comp>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Homepage/Header.vue";
import Desc from '../components/Homepage/Desc.vue'
import NewPost from '../components/Homepage/NewPost.vue'

export default {
  components: {
    "navbar-comp": Navbar,
    "footer-comp": Footer,
    "header-comp": Header,
    "desc-comp" : Desc,
    "new-post-comp": NewPost
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="scss" scoped></style>
