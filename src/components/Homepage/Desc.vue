<template>
  <div class="dark-container">
    <div class="desc-box">
      <h1 class="heading-nine head-desc">
        Himpunan Mahasiswa Informatika Fakultas Ilmu Komputer Universitas
        Brawijaya (HMIF FILKOM UB) adalah organisasi yang mewadahi, menaungi dan
        beranggotakan seluruh mahasiswa Informatika FILKOM UB.
      </h1>
      <button class="desc-btn">
        Rincian
      </button>
    </div>
    <div>
      <img :src="HMIFLogo" alt="" />
    </div>
  </div>
</template>

<script>
import HMIFLogo from "../../assets/img/HomePage/logo-hmif.png";
export default {
  data: function() {
    return {
      HMIFLogo
    };
  }
};
</script>

<style lang="scss" scoped>
.dark-container {
  background-color: #000f14;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 170px;
  padding-top: 20px;
  flex-wrap: wrap;
}

.head-desc {
  width: 420px;
  text-align: center;
  color: white;
  margin-bottom: 31px;
}

.desc-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 993px) {
    margin-right: 113px;
  }

  @media screen and (max-width: 992px) {
    margin: 50px auto;
  }
}
.desc-btn {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  background-color: #ffc804;
  padding: 12px 29px;
  border-radius: 40px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  &:active {
    background-color: #ffc904cb;
  }
}
</style>
