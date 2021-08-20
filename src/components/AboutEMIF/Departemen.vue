<template>
  <div>
    <h1 style="text-align: center">Departemen</h1>
    <p style="text-align: center">penjelasan singkat tentang apa itu departemen</p>

    <div>
      <div class="container-bar">
        <div class="container">
          <div class="item">
            <button>Button</button>
          </div>
          <div class="item">
            <button>Button</button>
          </div>
          <div class="item">
            <button>Button</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="header-dept">
        <div class="header-img-box">
          <div class="img-box"></div>
        </div>
        <div class="header-content-box">
          <div>
            <h1>John Doe</h1>
            <p>Kepala Departemen MSD</p>
            <p>Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB.</p>  
          </div>
        </div>
      </div>
      <div class="other-dept">
        <div class="box-other-dept">
          <h1>Nama</h1>
          <p>Manager Manajemen Sumber Daya</p>
        </div>
        <div class="box-other-dept">
          <h1>Nama</h1>
          <p>Manager Manajemen Sumber Daya</p>
        </div>
        <div class="box-other-dept">
          <h1>Nama</h1>
          <p>Manager Manajemen Sumber Daya</p>
        </div>
        <div class="box-other-dept">
          <h1>Nama</h1>
          <p>Manager Manajemen Sumber Daya</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .container-bar {
    width: 100%;
    background-color: black;
  }
  .container-bar .container {
    display: flex;
    justify-content: space-between;
  }
  .item {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-dept {
    width: 100%;

    .header-img-box {
      width: 433px;
      height: 433px;
      float: left;

      .img-box {
        height: 100%;
        width: 433px;
        background-image: url('https://s3-alpha-sig.figma.com/img/6197/648a/a17507e10af66c41354023e774067691?Expires=1630281600&Signature=cn8AplEB8tfA9e9qpydWkfuK5vR8J10LLp-24ok-AY2T4DhnkSMsakJpdfjh2f5JYPUCnLfOLuPgNUr1chbusX8dM4dIp5AvGWEPcJ8StVbMM410E3jQDtB6RDQYJqUl6-DgG0KXzxmf5Pp863Uc4kllnfNzM-6rsHx8xXgcB~4Ps53iDwVd5CQ4tVZchooFy4hweH80A13n~7oRI0cIha3YE99NnZotP3cY9D3R9seYQtMeWy6YxyCQpxR9ATTyktaeQvQa7NMzzZx4CHXvnwGPJx-e8SU2MTNx12Zyk7Lr-YHt5Y2thO2iY8Ir6jUEF~mKOfB88gnL8KiYKAeUhA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
        background-size: cover;
        background-position: center top;
      }
    }

    .header-content-box {
      width: 100%;
      height: 433px;
      background-color: blue;

      div {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        padding: 20px;
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .header-dept {

      .header-img-box {
        float: none;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .header-content-box div {
        h1, p {
          width: 100%;
          text-align: center;
        }
      }
    }
  }

  .other-dept {
    width: 100%;
    height: 295px;
    display: flex;

    .box-other-dept {
      flex: 1;
      height: 100%;
      background-image: linear-gradient(rgba(24, 25, 31, 0.8),rgba(24, 25, 31, 0.8)), url('https://s3-alpha-sig.figma.com/img/6197/648a/a17507e10af66c41354023e774067691?Expires=1630281600&Signature=cn8AplEB8tfA9e9qpydWkfuK5vR8J10LLp-24ok-AY2T4DhnkSMsakJpdfjh2f5JYPUCnLfOLuPgNUr1chbusX8dM4dIp5AvGWEPcJ8StVbMM410E3jQDtB6RDQYJqUl6-DgG0KXzxmf5Pp863Uc4kllnfNzM-6rsHx8xXgcB~4Ps53iDwVd5CQ4tVZchooFy4hweH80A13n~7oRI0cIha3YE99NnZotP3cY9D3R9seYQtMeWy6YxyCQpxR9ATTyktaeQvQa7NMzzZx4CHXvnwGPJx-e8SU2MTNx12Zyk7Lr-YHt5Y2thO2iY8Ir6jUEF~mKOfB88gnL8KiYKAeUhA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
      background-size: cover;
      background-position: center top;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h1, p {
        text-align: center;
      }
    }
  }
</style>
