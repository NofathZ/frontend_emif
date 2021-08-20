<template>
  <div class="wrapper">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-lg" style="padding: 0">
            <div class="photo"></div>
          </div>
          <div class="col-lg d-flex justify-content-center align-items-center" style="padding: 0">
            <div class="detail">
              <h1>Pak Ketua</h1>
              <p>Ketua EMIF</p>
              <p>Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="background">
      <div class="blue-line"></div>
      <div class="black-line"></div>
      <div class="blue-line"></div>
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
  // position: absolute;
  width: 527px;
  height: 539px;
  background-color: red;
}

.blue-line {
  height: 40px;
  width: 100%;
  background-color: blue;
}
.black-line {
  height: 309px;
  width: 100%;
  background-color: black;
}

</style>
