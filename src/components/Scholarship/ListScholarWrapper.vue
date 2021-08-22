<template>
  <div>
    <div>
      <scholar-card-one></scholar-card-one>
      <scholar-card-two></scholar-card-two>
    </div>
    <div class="d-flex justify-content-center align-items-center" style="margin-bottom: 75px">
      <paging></paging>
    </div>
  </div>
  
</template>

<script>

import ScholarCardOne from './ScholarCardOne.vue'
import ScholarCardTwo from './ScholarCardTwo.vue'
import Paging from './Paging.vue'

export default {
  components: {
    'scholar-card-one': ScholarCardOne,
    'scholar-card-two': ScholarCardTwo,
    'paging': Paging
  }
}

</script>

<style lang="scss" scoped>

</style>
