<template>
  <div>
    <div class="container">
      <h2 class="heading-two" style="margin-bottom: 39px">Pendaftaran Akan Datang</h2>
      <div class="row">

        <div class="col-lg-3 mb-4">
          <card-comp></card-comp>
        </div>
        
      </div>
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
