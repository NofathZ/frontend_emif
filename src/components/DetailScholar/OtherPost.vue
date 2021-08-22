<template>
  <div style="margin-bottom: 125px">
    <h1 class="heading-two" style="text-align: center; margin-bottom: 40px">Post Terkait</h1>
    <div class="container d-flex justify-content-between flex-wrap">
      <card-comp></card-comp>
      <card-comp></card-comp>
      <card-comp></card-comp>
    </div>
  </div>
</template>

<script>

import Card from './Card.vue'

export default {
  components: {
    'card-comp': Card
  }
}

</script>

<style lang="scss" scoped>

</style>
