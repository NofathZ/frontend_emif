<template>
  <div class="wrapper">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-lg photo-box" style="padding: 0">
            <div class="photo"></div>
          </div>
          <div class="col-lg d-flex justify-content-center align-items-center" style="padding: 0">
            <div class="detail">
              <h1 class="lead-two">Pak Koordinator</h1>
              <p class="lead-three">Koordinator BPMIF</p>
              <p class="lead-four">Penanggung jawab atas jalannya lembaga legislatif BPMIF dan sebagai pengatur / pengkoordinir kegiatan dan anggota BPMIF.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="background">
      <div class="top-line"></div>
      <div class="center-line"></div>
      <div class="empty-line"></div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

.wrapper {
  width: 100%;
  height: 539px;
  position: relative;
}

@media screen and (max-width: 992px) {
  .wrapper {
    height: 650px;
  }
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
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
  background-image: url('https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
  background-size: cover;
  background-position: center;
}

@media screen and (max-width: 992px){
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
    display: none;
  }

  .detail {

    h1, p {
      text-align: center;
    }
  }
}

@media screen and (max-width: 768px){
  .photo {
    width: 302px;
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
  height: 309px;
  width: 100%;
  background-color: black;
}

</style>
