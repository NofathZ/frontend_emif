<template>
  <div class="dark-container d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="row">
        <div
          class="col d-flex justify-content-center align-items-start flex-column"
        >
          <h1
            class="text-white heading-two header-text"
            style="margin-bottom: 60px"
          >
            Eksekutif Mahasiswa Informatika
          </h1>
          <p class="text-white lead-three header-text">
            Lembaga Eksekutif Teknik Informatika
          </p>
          <p class="text-white lead-four header-text">
            Eksekutif Mahasiswa Informatika adalah lembaga yang memiliki fungsi
            sebagai badan eksekutif
          </p>
        </div>
        <div
          class="col d-flex justify-content-center align-items-center img-header"
        >
          <img :src="EmifAbout" alt="Emif Logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmifAbout from "../../assets/img/AboutEMIF/emif-about.svg";

export default {
  data: function() {
    return {
      EmifAbout
    };
  }
};
</script>

<style lang="scss" scoped>
.dark-container {
  height: 527px;
  width: 100%;
  background-color: #000f14;
}

@media screen and (max-width: 768px) {
  .img-header {
    margin-top: 30px;
  }
  .header-text {
    width: 100%;
    text-align: center;
  }
}
</style>
