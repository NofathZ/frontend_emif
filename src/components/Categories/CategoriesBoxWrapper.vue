<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-lg-4 mb-5" v-for="category in listCategories" :key="category.judul">
        <div class="custom-card" :style="category.background">
          <div class="card-body">
            <div class="mb-4">
              <h4 class="text-white heading-four mb-4">{{ category.judul }}</h4>
              <p class="text-white lead-four">{{ category.deskripsi }}</p>
            </div>
            <a v-bind:href= "category.url"><button class="heading-five read-more-btn">Baca Selengkapnya </button></a>
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
          judul: "Agenda",
          deskripsi: "Dapatkan informasi agenda terkini, terbaru dan relevan sesuai jurusan anda!",
          url: "/#/agenda",
          background: {
            backgroundColor: "#5A0000"
          }
        },
        {
          judul: "Beasiswa",
          deskripsi: "Dapatkan informasi beasiswa dari perusahaan dan lembaga pemberi beasiswa terbaik.",
          url: "/#/beasiswa",
          background: {
            backgroundColor: "#245100"
          }
        },
        {
          judul: "Pendaftaran",
          deskripsi: "Penasaran ada pendaftaran apa saja bulan ini? Yuk cek selengkapnya!",
          url: "/#/pendaftaran",
          background: {
            backgroundColor: "#003141"
          }
        },
        {
          judul: "Pengumuman",
          deskripsi: "Segala pengumuman akademik, pendaftar lolos, dan lainnya hanya ada di sini!",
          url: "/#/pengumuman",
          background: {
            backgroundColor: "#00084F"
          }
        },
        {
          judul: "Lomba",
          deskripsi: "Butuh hiburan? Apa tantangan? Yuk baca seputar lomba terkini informatika di sini!",
          url: "/#/lomba",
          background: {
            backgroundColor: "#525400"
          }
        },
        {
          judul: "Produk",
          deskripsi: "Penasaran kan kita punya produk apa aja? Yuk baca selengkapnya di sini!",
          url: "/#/produk",
          background: {
            backgroundColor: "#003F06"
          }
        },
        {
          judul: "Lowongan Kerja",
          deskripsi: "Dapatkan Info Terkini mengenai lowongan kerja terbuka untuk jurusan Informatika.",
          url: "/#/lowongan",
          background: {
            backgroundColor: "#004D31"
          }
        },
        {
          judul: "Artikel",
          deskripsi: "Bosan dengan akademik? Butuh hiburan? Yuk baca artikel terbaik dari kami!",
          url: "/#/artikel",
          background: {
            backgroundColor: "#310048"
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '../../assets/scss/_variable';

.custom-card {
  min-height: 225px;
  // background: #47B29E !important;
  border: none !important;
  padding: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;

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
</style>