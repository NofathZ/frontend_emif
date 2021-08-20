<template>
  <div class="bg">
    <h1 class="title">Visi dan Misi</h1>
    <div class="visi container">
      <h3 class="heading-two">Visi</h3>
      <p class="lead-four">Menjaga seluruh anggota Himpunan Mahasiswa Informatika tetap ada dalam kurawal himpunan</p>
    </div>
    <div class="misi container">
      <h3 class="heading-two">Misi</h3>
      <ol>
        <li class="lead-four">Menciptakan Himpunan Mahasiswa Informatika sebagai rumah yang nyaman dan terbuka untuk semua anggota Himpunan Mahasiswa Informatika.</li>
        <li class="lead-four">Memperkuat rasa kekeluargaan antar anggota Himpunan Mahasiswa Informatika.</li>
        <li class="lead-four">Sebagai sarana advokasi yang tanggap untuk seluruh anggota Himpunan Mahasiswa Informatika.</li>
        <li class="lead-four">Sebagai sarana pengembangan keilmuan dan keprofesian guna meningkatkan potensi diri seluruh anggota Himpunan Mahasiswa Informatika.</li>
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

.bg {
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
