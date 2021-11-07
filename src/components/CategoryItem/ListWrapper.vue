<template>
  <div class="background-dark">
    <div v-for="(item, index) in items" :key="index">
      <item-card-one v-if="index % 2 == 0" :item="item"/>
      <item-card-two v-else :item="item"/>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <paging></paging>
    </div>
  </div>
  
</template>

<script>

import ItemCardOne from './ItemCardOne.vue'
import ItemCardTwo from './ItemCardTwo.vue'
import Paging from './Paging.vue'

export default {
  props: ['items'],
  components: {
    'item-card-one': ItemCardOne,
    'item-card-two': ItemCardTwo,
    'paging': Paging
  }
}

</script>

<style lang="scss" scoped>
.background-dark {
  background-color: #142227;
  padding-top: 88px;
  padding-bottom: 75px
}
</style>
