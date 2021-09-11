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
              <h1 class="lead-two">Pak Ketua</h1>
              <p class="lead-three">Ketua EMIF</p>
              <p class="lead-four">Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB.</p>
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
  // background-image: url('https://s3-alpha-sig.figma.com/img/6197/648a/a17507e10af66c41354023e774067691?Expires=1632096000&Signature=KJLNZRwJNijl5LKcmgCj4HWqmHRDaFDelEW8DM2uwWy95uRUuWVDVRKx~~h3DWIrN2zw0IUVUleg-qMXIkLMfS6G-TdW54q4aLkJYUJs-kx3qODypHcoTQKNjfXZd4JyIIES9oY0mQZH9sVCB~H~y0XXuHvBQpgvGJuXanYxOWDRBrd6qQD22VSr2jpCHzhtK5oveq86ZuuFOrDOX0B6Yx3vufFVJjVlZxRONYve2HKM5YgMuvJZPM0MLH9DfyXf-7w3w4998v7NxPbu6ZAta9DSzyKolwM1UChdVMLSFKEtV3v6rKuDYACo5EJ8LXTQY~v~rlzixY5pp3FXtelc2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
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
  background-color: #083B4D;
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
