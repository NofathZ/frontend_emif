<template>
  <div>
    <navbar-comp></navbar-comp>
    <info-box></info-box>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import InfoBox from "../components/Contact/InfoBox.vue";

export default {
  components: {
    "navbar-comp": Navbar,
    "footer-comp": Footer,
    "info-box": InfoBox
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="scss" scoped></style>
