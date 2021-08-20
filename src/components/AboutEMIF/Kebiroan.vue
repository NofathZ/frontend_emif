<template>
  <div>
    <h1>Biro</h1>
    <p>penjelasan singkat tentang apa itu biro</p>

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
        background-color: black;
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
      background-color: black;
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
