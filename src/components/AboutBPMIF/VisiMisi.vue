<template>
  <div class="background" style="padding-top: 88px; padding-bottom: 88px">
    <h1 class="title heading-one" style="margin-bottom: 84px">Visi dan Misi</h1>
    <div class="visi container">
      <h3 class="heading-two">Visi</h3>
      <p class="lead-four">Mewujudkan BPMIF FILKOM UB yang optimal dalam melaksanakan fungsi lembaga legislatif dengan semangat progresif</p>
    </div>
    <div class="misi container">
      <h3 class="heading-two">Misi</h3>
      <ol>
        <li class="lead-four">Optimalisasi BPMIF FILKOM UB sebagai wadah advokasi terbuka bagi seluruh anggota HMIF FILKOM UB.</li>
        <li class="lead-four">Melakukan transparasi kinerja pengurus HMIF FILKOM UB melalui publikasi berkesinambungan.</li>
        <li class="lead-four">Membuat dan mengkaji produk hukum yang berguna untuk kesejahteraan HMIF FILKOM UB.</li>
      </ol>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
// @import '../../assets/scss/_variable';

* {
  color: white;
}

.background {
  background-color: #142227;
}

.title {
  text-align: center;
}

.visi, .misi {
  background-color: #000F14;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 0 50px;

  h3 {
    margin-bottom: 35px;
  }
}
.visi {
  height: 234px;
  margin-bottom: 43px;
}
.misi {
  height: 405px;
}
</style>
