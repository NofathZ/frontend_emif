<template>
  <div class="background-dark">
    <navbar-comp></navbar-comp>
    <pendaftaran-aktif
      style="margin-top: 146px; margin-bottom: 88px"
    ></pendaftaran-aktif>
    <pendaftaran-akan-datang
      style="margin-bottom: 88px"
    ></pendaftaran-akan-datang>
    <semua-pendaftaran style="margin-bottom: 200px"></semua-pendaftaran>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import PendaftaranAktif from "../components/Registration/PendaftaranAktif.vue";
import PendaftaranAkanDatang from "../components/Registration/PendaftaranAkanDatang.vue";
import SemuaPendaftaran from "../components/Registration/SemuaPendaftaran.vue";

export default {
  components: {
    "pendaftaran-aktif": PendaftaranAktif,
    "pendaftaran-akan-datang": PendaftaranAkanDatang,
    "semua-pendaftaran": SemuaPendaftaran,
    "navbar-comp": Navbar,
    "footer-comp": Footer
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="scss" scoped>
.background-dark {
  background-color: #000F14;
}
</style>
