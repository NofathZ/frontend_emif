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
  // background-color: white !important;
  background-image: linear-gradient(to bottom, #132227, #181B1E, #220D0D, #300D0D, #2F0D0D) !important;
  background: none;
}

</style>
