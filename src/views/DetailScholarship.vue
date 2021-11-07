<template>
  <div>
    <navbar-comp></navbar-comp>
    <detail-info :item="item" />
    <other-post :recommendations="recommendations" />
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import DetailInfo from "../components/DetailCategoryItem/DetailInfo.vue";
import OtherPost from "../components/DetailCategoryItem/OtherPost.vue";

export default {
  components: {
    "navbar-comp": Navbar,
    "footer-comp": Footer,
    "detail-info": DetailInfo,
    "other-post": OtherPost
  },
  data: function() {
    return {
      item: [],
      recommendations: []
    };
  },
  methods: {
    getPost() {
      axios.get("api/posts/beasiswa/" + this.$route.params.slug)
      .then( (response) =>{
        this.item = response.data
      } )
    },
    getRecommendations() {
      axios.get("api/posts/recommendations/beasiswa/" + this.$route.params.slug)
      .then( (response) =>{
        this.recommendations = response.data
      } )
    },
    // getInfo() {
    //   axios
    //     .all([
    //       axios.get("api/posts/beasiswa/" + this.$route.params.slug),
    //       axios.get(
    //         "api/posts/recommendations/beasiswa/" + this.$route.params.slug
    //       )
    //     ])
    //     .then(
    //       axios.spread((post, recommendations) => {
    //         (this.item = post.data),
    //         (this.recommendations = recommendations.data);
    //       })
    //     );
    // }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  created() {
    // this.getInfo();
    this.getPost();
    this.getRecommendations();
  }
};
</script>

<style lang="scss" scoped></style>
