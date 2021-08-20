<template>
  <div>
    <navbar-comp></navbar-comp>
    <header-comp></header-comp>
    <visi-misi></visi-misi>
    <internal-box></internal-box>
    <h1>Last BG</h1>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  import Header from '../components/AboutEMIF/Header.vue'
  import VisiMisi from '../components/AboutEMIF/VisiMisi.vue'
  import InternalBox from '../components/AboutEMIF/InternalBox.vue'
  
  export default {
    components: {
      'navbar-comp': Navbar,
      'header-comp': Header,
      'visi-misi': VisiMisi,
      'internal-box': InternalBox,
    }
  }
</script>

<style lang="scss" scoped>
// * {
//   font-family: 'Poppins', sans-serif !important;
// }
</style>
