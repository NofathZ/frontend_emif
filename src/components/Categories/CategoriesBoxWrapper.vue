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
            <button class="heading-five read-more-btn">Baca Selengkapnya</button>
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
          url: "/agenda",
          background: {
            backgroundColor: "#210000"
          }
        },
        {
          judul: "Beasiswa",
          deskripsi: "Dapatkan informasi beasiswa dari perusahaan dan lembaga pemberi beasiswa terbaik.",
          url: "/beasiswa",
          background: {
            backgroundColor: "#091400"
          }
        },
        {
          judul: "Pendaftaran",
          deskripsi: "Penasaran ada pendaftaran apa saja bulan ini? Yuk cek selengkapnya!",
          url: "/pendaftaran",
          background: {
            backgroundColor: "#000F14"
          }
        },
        {
          judul: "Pengumuman",
          deskripsi: "Segala pengumuman akademik, pendaftar lolos, dan lainnya hanya ada di sini!",
          url: "/pengumuman",
          background: {
            backgroundColor: "#000321"
          }
        },
        {
          judul: "Lomba",
          deskripsi: "Butuh hiburan? Apa tantangan? Yuk baca seputar lomba terkini informatika di sini!",
          url: "/lomba",
          background: {
            backgroundColor: "#202100"
          }
        },
        {
          judul: "Produk",
          deskripsi: "Penasaran kan kita punya produk apa aja? Yuk baca selengkapnya di sini!",
          url: "/produk",
          background: {
            backgroundColor: "#002103"
          }
        },
        {
          judul: "Lowongan Kerja",
          deskripsi: "Dapatkan Info Terkini mengenai lowongan kerja terbuka untuk jurusan Informatika.",
          url: "/lowongan-kerja",
          background: {
            backgroundColor: "#002115"
          }
        },
        {
          judul: "Artikel",
          deskripsi: "Bosan dengan akademik? Butuh hiburan? Yuk baca artikel terbaik dari kami!",
          url: "/artikel",
          background: {
            backgroundColor: "#160021"
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