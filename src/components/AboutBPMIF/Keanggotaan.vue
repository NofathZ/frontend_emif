<template>
  <div>
    <h1 class="heading-one" style="text-align: center; margin-bottom: 117px">Keanggotaan</h1>
    <koordinator style="margin-bottom: 168px;"></koordinator>
    <sekben></sekben>
  </div>
</template>

<script>

import Koordinator from '../AboutBPMIF/Koordinator.vue'
import Sekben from '../AboutBPMIF/Sekben.vue'

export default {
  components: {
    'koordinator': Koordinator,
    'sekben': Sekben
  }
}

</script>

<style lang="scss" scoped>

</style>
