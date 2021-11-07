<template>
  <div class="other-post-wrapper">
    <h1 class="heading-two" style="text-align: center; margin-bottom: 40px">
      Post Terkait
    </h1>
    <div class="container d-flex justify-content-between flex-wrap">
      <div v-for="(recommendation, index) in recommendations" :key="index">
        <card-comp :recommendation="recommendation" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: {
    "card-comp": Card
  },
  props: ["recommendations"]
};
</script>

<style lang="scss" scoped>
.other-post-wrapper {
  padding-bottom: 125px;
  background-color: #142227;
}
</style>
