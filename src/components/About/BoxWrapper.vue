<template>
  <div class="container">
    <div class="row about-box-wrapper">
      <div
        class="custom-card"
        v-for="category in listCategories"
        :key="category.judul"
        :style="category.background"
      >
        <div class="card-body">
          <div class="about-img-box">
            <img :src="category.img" />
          </div>
          <div class="mb-4">
            <h4 class="text-white heading-four mb-4 category-title-text">
              {{ category.judul }}
            </h4>
            <p class="text-white lead-four category-desc-text">
              {{ category.deskripsi }}
            </p>
          </div>
          <router-link v-bind:to="category.url">
            <button class="heading-five read-more-btn">Telusuri</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutEmif from "../../assets/img/About/about-emif.svg";
import AboutHMIF from "../../assets/img/About/about-hmif.svg";
import AboutBPMIF from "../../assets/img/About/about-bpmif.svg";

export default {
  data() {
    return {
      listCategories: [
        {
          judul: "Eksekutif Mahasiswa Informatika",
          deskripsi:
            "Eksekutif Mahasiswa Informatika adalah lembaga yang memiliki fungsi sebagai badan eksekutif",
          url: "/about/emif",
          background: {
            backgroundColor: "#003243",
          },
          img: AboutEmif,
        },
        {
          judul: "Himpunan Mahasiswa Informatika",
          deskripsi:
            "HMIF adalah organisasi yang mewadahi, menaungi dan beranggotakan seluruh mahasiswa Informatika FILKOM UB",
          url: "/",
          background: {
            backgroundColor: "#1A3A00",
          },
          img: AboutHMIF,
        },
        {
          judul: "Badan Perwakilan Mahasiswa Informatika",
          deskripsi:
            "Eksekutif Mahasiswa Informatika adalah lembaga yang memiliki fungsi sebagai badan eksekutif",
          url: "/about/bpmif",
          background: {
            backgroundColor: "#470101",
          },
          img: AboutBPMIF,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variable";

.about-box-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 143px;
}

.custom-card {
  width: 343px;
  min-height: 421px;
  border: none !important;
  padding: 1rem;
  position: relative;
  border-radius: 10px;
  border: 2px solid white;

  &::-webkit-scrollbar {
    display: none;
  }
  .read-more-btn {
    background-color: #ffc804;
    color: black;
    border: none;
    padding: 7px 16px;
  }
  .read-more-btn:hover {
    background-color: #f3c007;
  }
}
.about-img-box {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 120px;
  margin-bottom: 30px;

  img {
    border-radius: 10px;
  }
}
.category-title-text {
  min-height: 40px;
}
.category-desc-text {
  min-height: 100px;
}
</style>
