<template>
  <div class="bg-gradient">
    <keanggotaan></keanggotaan>
    <departemen></departemen>
    <biro></biro>
  </div>
</template>

<script>

import Keanggotaan from '../AboutEMIF/Keanggotaan.vue'
import Departemen from '../AboutEMIF/Departemen.vue'
import Kebiroan from '../AboutEMIF/Kebiroan.vue'

export default {
  components: {
    'keanggotaan': Keanggotaan,
    'departemen': Departemen,
    'biro': Kebiroan
  }
}

</script>

<style lang='scss' scoped>

* {
  color: white;
}

.bg-gradient {
  background-color: black;
  background: none;
}

</style>
