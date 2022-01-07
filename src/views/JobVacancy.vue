<template>
  <div>
    <navbar-comp></navbar-comp>
    <header-comp
      v-bind:headerType="this.headerType"
      v-bind:headerDesc="this.headerDesc"
    ></header-comp>
    <list-wrapper :items="items"></list-wrapper>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/CategoryItem/Header.vue";
import ListWrapper from "../components/CategoryItem/ListWrapper.vue";

export default {
  components: {
    "navbar-comp": Navbar,
    "footer-comp": Footer,
    "header-comp": Header,
    "list-wrapper": ListWrapper
  },
  data: function() {
    return {
      headerType: "Lowongan Kerja",
      headerDesc:
        "Dapatkan informasi lowongan kerja dari perusahaan dan lembaga pemberi lowongan kerja terbaik",
      items: []
    };
  },
  methods: {
    getList() {
      axios
        .get("api/posts/lowongan")
        .then(response => {
          this.items = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  created() {
    this.getList();
  }
};
</script>

<style lang="scss" scoped></style>
