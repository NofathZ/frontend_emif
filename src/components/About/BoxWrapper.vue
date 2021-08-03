<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-lg-4 mb-5" v-for="category in listCategories" :key="category.judul">
        <div class="custom-card" :style="category.background">
          <div class="card-body">
            <div class="about-img-box">
              <img :src="category.img" />
            </div>
            <div class="mb-4">
              <h4 class="text-white heading-four mb-4 category-title-text">{{ category.judul }}</h4>
              <p class="text-white lead-four category-desc-text">{{ category.deskripsi }}</p>
            </div>
            <button class="read-more-btn">Telusuri</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listCategories: [
        {
          judul: "Eksekutif Mahasiswa Informatika",
          deskripsi: "Eksekutif Mahasiswa Informatika adalah lembaga yang memiliki fungsi sebagai badan eksekutif",
          url: "/",
          background: {
            backgroundColor: "#210000"
          },
          img: require('@/assets/img/About/about-emif.svg')
        },
        {
          judul: "Himpunan Mahasiswa Informatika",
          deskripsi: "HMIF adalah organisasi yang mewadahi, menaungi dan beranggotakan seluruh mahasiswa Informatika FILKOM UB",
          url: "/",
          background: {
            backgroundColor: "#091400"
          },
          img: require('@/assets/img/About/about-hmif.svg')
        },
        {
          judul: "Badan Perwakilan Mahasiswa Informatika",
          deskripsi: "Eksekutif Mahasiswa Informatika adalah lembaga yang memiliki fungsi sebagai badan eksekutif",
          url: "/",
          background: {
            backgroundColor: "#000F14"
          },
          img: require('@/assets/img/About/about-bpmif.svg')
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variable';

.custom-card {
  min-height: 421px;
  border: none !important;
  padding: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &::-webkit-scrollbar {
      display: none;
  }
  .read-more-btn {
    background-color: #FFC804;
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
}
.category-title-text {
  min-height: 40px;
}
.category-desc-text {
  min-height: 100px;
}
</style>