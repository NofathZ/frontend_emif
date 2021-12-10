<template>
  <div style="margin-bottom: 50px">
    <h1 class="heading-two" style="text-align: center">
      {{ dataSekben.title }}
    </h1>
    <div class="container sekben-container">
      <div class="row">
        <div class="col d-flex justify-content-center align-items-center">
          <div class="box-container m-3">
            <div class="img-box">
              <img :src="dataSekben.dataAnggota[0].gambar" alt="" />
            </div>
            <div class="content-box">
              <h1 class="heading-two">{{ dataSekben.dataAnggota[0].nama }}</h1>
              <p class="lead-three">{{ dataSekben.dataAnggota[0].jabatan }}</p>
              <p class="lead-four">
                {{ dataSekben.dataAnggota[0].tugas }}
              </p>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center align-items-center">
          <div class="box-container m-3">
            <div class="img-box">
              <img style="object-fit: cover" :src="dataSekben.dataAnggota[1].gambar" alt="" />
            </div>
            <div class="content-box">
              <h1 class="heading-two">{{ dataSekben.dataAnggota[1].nama }}</h1>
              <p class="lead-three">{{ dataSekben.dataAnggota[1].nama }}</p>
              <p class="lead-four">
                {{ dataSekben.dataAnggota[1].tugas }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FotoKetua from "../../assets/img/AboutEMIF/Internal/kahim.png";

export default {
  props: ["dataSekben"],
  data: function() {
    return {
      FotoKetua
    };
  }
};
</script>

<style lang="scss" scoped>
.sekben-container {
  display: flex;
  justify-content: space-around;
}

.img-box {
  width: 433px;
  height: 394px;
  // background-image: url('https://s3-alpha-sig.figma.com/img/6197/648a/a17507e10af66c41354023e774067691?Expires=1630281600&Signature=cn8AplEB8tfA9e9qpydWkfuK5vR8J10LLp-24ok-AY2T4DhnkSMsakJpdfjh2f5JYPUCnLfOLuPgNUr1chbusX8dM4dIp5AvGWEPcJ8StVbMM410E3jQDtB6RDQYJqUl6-DgG0KXzxmf5Pp863Uc4kllnfNzM-6rsHx8xXgcB~4Ps53iDwVd5CQ4tVZchooFy4hweH80A13n~7oRI0cIha3YE99NnZotP3cY9D3R9seYQtMeWy6YxyCQpxR9ATTyktaeQvQa7NMzzZx4CHXvnwGPJx-e8SU2MTNx12Zyk7Lr-YHt5Y2thO2iY8Ir6jUEF~mKOfB88gnL8KiYKAeUhA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
  // background-image: url("https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
  // background-size: cover;
  // background-position: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.content-box {
  width: 433px;
  height: 261px;
  background-color: #000f14;
  padding: 15px;

  h1,
  p {
    text-align: justify;
  }
}
</style>
