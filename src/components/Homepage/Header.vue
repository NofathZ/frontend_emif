<template>
  <div class="dark-container">
    <div class="content">
      <img :src="LineHead" alt="" />
      <h1 class="heading-one" style="color: white; text-align: left;">
        Himpunan Mahasiswa Informatika
      </h1>
      <h4 class="heading-seven" style="color: white">#CAHAYALENTERA</h4>
      <h4 class="heading-seven" style="color: white">#SATUPADUINFORMATIKA</h4>
    </div>
  </div>
</template>

<script>
// import HMIFLogo from "../../assets/img/HomePage/logo-hmif.png";
// import BackgroundHeader from "../../assets/img/HomePage/background-header.png";
import LineHead from "../../assets/img/HomePage/line-head.png";

export default {
  data: function() {
    return {
      LineHead
    };
  }
};
</script>

<style lang="scss" scoped>
.dark-container {
  display: flex;

  padding: 90px;
  height: 94vh;
  width: 100%;
  background-image: url("../../assets/img/HomePage/background-header.png");
  background-repeat: no-repeat;

  background-color: #000f14;
}

@media screen and (min-width: 993px) {
  .dark-container {
    justify-content: flex-start;
    align-items: center;
    background-position: center right;
  }
}

@media screen and (max-width: 992px) {
  .dark-container {
    justify-content: center;
    align-items: flex-start;
    background-position: bottom right;
  }
}
</style>
