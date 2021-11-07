<template>
  <div class="wrapper">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-lg photo-box" style="padding: 0">
            <div class="photo">
              <img :src="FotoKetua" alt="" />
            </div>
          </div>
          <div
            class="col-lg d-flex justify-content-center align-items-center"
            style="padding: 0"
          >
            <div class="detail">
              <h1 class="heading-two">Pak Ketua</h1>
              <p class="lead-three">Ketua EMIF</p>
              <p class="lead-four">
                Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF
                FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi
                EMIF FILKOM UB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="background">
      <div class="empty-line"></div>
      <div class="empty-line"></div>
      <div class="empty-line"></div>

      <div class="top-line"></div>
      <div class="center-line"></div>
      <div class="empty-line"></div>
    </div>
  </div>
</template>

<script>
import FotoKetua from '../../assets/img/AboutEMIF/ketua.png';

export default {
  data: function() {
    return {
      FotoKetua
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 539px;
  position: relative;
}

@media screen and (max-width: 992px) {
  .wrapper {
    // height: 650px;
  }
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* flex-direction: column; */
  z-index: 1;
}

.detail {
  padding: 15px;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.photo {
  width: 527px;
  height: 539px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media screen and (max-width: 992px) {
  .photo {
    width: 418px;
    height: 427px;
  }

  .photo-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .background {
    /* display: none; */
  }

  .center-line {
    height: 470px;
  }

  .detail {
    h1,
    p {
      text-align: center;
    }
  }
}

@media screen and (max-width: 768px) {
  .photo {
    width: 302px;
    height: 309px;
  }

  .center-line {
    height: 350px;
  }
}

@media screen and (min-width: 993px) {
  .center-line {
    height: 309px;
  }
}

.top-line {
  height: 40px;
  width: 100%;
  background-color: #083b4d;
}
.empty-line {
  height: 40px;
  width: 100%;
  background: none;
}
.center-line {
  /* height: 309px; */
  width: 100%;
  background-color: black;
}
</style>
