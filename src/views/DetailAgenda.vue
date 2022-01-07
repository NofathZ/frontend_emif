<template>
  <div>
    <navbar-comp></navbar-comp>
    <detail-info :item="post" />
    <other-post :recommendations="recommendations" />
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import DetailInfo from "../components/DetailCategoryItem/DetailInfo.vue";
import OtherPost from "../components/DetailCategoryItem/OtherPost.vue";

export default {
  components: {
    "navbar-comp": Navbar,
    "footer-comp": Footer,
    "detail-info": DetailInfo,
    "other-post": OtherPost,
  },
  data: function () {
    return {
      post: [],
      recommendations: [],
    };
  },
  methods: {
    getInfo() {
      axios
        .all([
          axios.get("api/posts/agenda/" + this.$route.params.slug),
          axios.get(
            "api/posts/recommendations/agenda/" + this.$route.params.slug
          ),
        ])
        .then(
          axios.spread((post, recommendations) => {
            console.log("Post : " + post.data),
              console.log("Recommendations : " + recommendations.data),
              (this.post = post.data),
              (this.recommendations = recommendations.data);
          })
        );
      // axios.get('api/posts/beasiswa/' + this.$route.params.slug)
      // .then( response => {
      //   console.log(this.post),
      //   this.post = response.data
      // })
      // .catch( error => {
      //   console.log( error );
      // })
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  created() {
    this.getInfo();
  },
};
</script>

<style lang="scss" scoped></style>
