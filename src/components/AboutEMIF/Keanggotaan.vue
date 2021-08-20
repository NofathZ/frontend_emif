<template>
  <div>
    <h1 style="text-align: center">Keanggotaan</h1>
    <ketua></ketua>
    <wakil-ketua></wakil-ketua>
    <sekben></sekben>
  </div>
</template>

<script>

import Ketua from '../AboutEMIF/Ketua.vue'
import WakilKetua from '../AboutEMIF/WakilKetua.vue'
import Sekben from '../AboutEMIF/Sekben.vue'

export default {
  components: {
    'ketua': Ketua,
    'wakil-ketua': WakilKetua,
    'sekben': Sekben
  }
}

</script>

<style lang="scss" scoped>

</style>
