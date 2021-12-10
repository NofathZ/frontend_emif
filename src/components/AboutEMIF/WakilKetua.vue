<template>
  <div class="wrapper">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-lg photo-box d-lg-none" style="padding: 0">
            <div class="photo">
              <img :src="FotoWakilKetua" alt="" />
            </div>
          </div>
          <div
            class="col-lg d-flex justify-content-center align-items-center"
            style="padding: 0"
          >
            <div class="detail">
              <h1 class="heading-two">Dimi Karillah Putra</h1>
              <p class="lead-three">Wakil Ketua EMIF</p>
              <p class="lead-four">
                Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF
                FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi
                EMIF FILKOM UB.
              </p>
            </div>
          </div>
          <div class="col-lg photo-box d-none d-lg-block" style="padding: 0">
            <div class="photo">
              <img style="object-fit: cover; object-position: center top;" :src="FotoWakilKetua" alt="" />
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
import FotoWakilKetua from "../../assets/img/AboutEMIF/Internal/wakahim.png";

export default {
  data: function() {
    return {
      FotoWakilKetua
    };
  }
};
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
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  z-index: 1;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.detail {
  padding: 15px;
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

.detail {
  margin-right: 50px;
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
    margin: 0;

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
  background-color: #511407;
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
