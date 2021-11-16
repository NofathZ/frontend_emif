<template>
  <div class="error-container">
    <div class="error-title" style="margin-bottom: 2vh">
      <h1>COMING SOON!</h1>
    </div>
    <div class="error-pict-container" style="margin-bottom: 2vh">
      <img src="../assets/img/pict404.svg" alt="" />
    </div>
    <div class="error-detail" style="margin-bottom: 2vh">
      <p>Halaman Sedang Dalam Tahap Pengembangan, Stay Tuned Yaa</p>
    </div>
    <div class="error-back-button-container">
      <router-link to="/" style="text-decoration: none">
        <div class="error-back-button">BACK TO HOME</div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-container {
  width: 100vw;
  height: 100vh;
  background-color: #19292E;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  overflow: hidden;
}
.error-title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.error-title h1 {
  text-align: center;
  margin: 0;
  letter-spacing: 2vw;
  color: white;
}
.error-pict-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.error-detail {
  display: flex;
  justify-content: center;
  align-items: center;
}
.error-detail p {
  color: white;
  font-size: 3vh;
  letter-spacing: 0.5vw;
  text-align: center;
}
.error-back-button-container {
  width: 100vw;
  display: flex;
  justify-content: center;
}
.error-back-button {
  font-size: 2vh;
  padding: 10px;
  border-radius: 40px;
  border: 2px solid white;
  background-color: white;
  color: #19292E;
}

@media screen and (max-width: 768px) {
  .error-pict-container img {
    width: 90vw;
  }
}

</style>
