<template>
  <div class="bg-gradient">
    <keanggotaan style="margin-bottom: 203px"></keanggotaan>
    <departemen style="margin-bottom: 194px"></departemen>
    <biro style="padding-bottom: 232px"></biro>
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
