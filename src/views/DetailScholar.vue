<template>
  <div>
    <navbar-comp></navbar-comp>
    <detail-info></detail-info>
    <other-post></other-post>
    <footer-comp></footer-comp>
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import DetailInfo from '../components/DetailScholar/DetailInfo.vue'
import OtherPost from '../components/DetailScholar/OtherPost.vue'

export default {
  components: {
    'navbar-comp': Navbar,
    'footer-comp': Footer,
    'detail-info': DetailInfo,
    'other-post': OtherPost
  }
}

</script>

<style lang="scss" scoped>

</style>
