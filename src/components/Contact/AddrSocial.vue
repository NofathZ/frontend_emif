<template>
  <div>
    <h1 class="heading-one" style="margin-bottom: 35px">Hubungi Kami</h1>
    <div class="address" style="margin-bottom: 58px">
      <h3 class="heading-two" style="margin-bottom: 12px">Alamat</h3>
      <p class="lead-three">Gedung X No. X, Kelurahan X, Kecamatan X<br>Malang,<br>Jawa Timur</p>
    </div>
    <div class="social-media">
      <h3 class="heading-two" style="margin-bottom: 20px">Social Media</h3>
      <div class="row">
        <social-media></social-media>
        <social-media></social-media>
        <social-media></social-media>
        <social-media></social-media>
        <social-media></social-media>
      </div>
    </div>
  </div>
</template>

<script>

import SocialMedia from './SocialMedia.vue'

export default {
  components: {
    'social-media': SocialMedia
  }
}

</script>

<style lang="scss" scoped>

</style>
