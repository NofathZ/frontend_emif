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
  background-image: url('https://s3-alpha-sig.figma.com/img/6197/648a/a17507e10af66c41354023e774067691?Expires=1630281600&Signature=cn8AplEB8tfA9e9qpydWkfuK5vR8J10LLp-24ok-AY2T4DhnkSMsakJpdfjh2f5JYPUCnLfOLuPgNUr1chbusX8dM4dIp5AvGWEPcJ8StVbMM410E3jQDtB6RDQYJqUl6-DgG0KXzxmf5Pp863Uc4kllnfNzM-6rsHx8xXgcB~4Ps53iDwVd5CQ4tVZchooFy4hweH80A13n~7oRI0cIha3YE99NnZotP3cY9D3R9seYQtMeWy6YxyCQpxR9ATTyktaeQvQa7NMzzZx4CHXvnwGPJx-e8SU2MTNx12Zyk7Lr-YHt5Y2thO2iY8Ir6jUEF~mKOfB88gnL8KiYKAeUhA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
  background-size: cover;
  background-position: center top;
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
