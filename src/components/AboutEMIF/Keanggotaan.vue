<template>
  <div>
    <h1 class="heading-one" style="text-align: center; margin-bottom: 117px">Keanggotaan</h1>
    <ketua style="margin-bottom: 168px;"></ketua>
    <wakil-ketua style="margin-bottom: 290px"></wakil-ketua>
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
