<template>
  <div class="bg-gradient">
    <keanggotaan style="margin-bottom: 203px"></keanggotaan>
    <komisi-bpmif style="padding-bottom: 232px"></komisi-bpmif>
  </div>
</template>

<script>

import Keanggotaan from '../AboutBPMIF/Keanggotaan.vue'
import KomisiBPMIF from '../AboutBPMIF/KomisiBPMIF.vue'

export default {
  components: {
    'keanggotaan': Keanggotaan,
    'komisi-bpmif': KomisiBPMIF
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
