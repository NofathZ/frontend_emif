<template>
  <div>
    <h1 class="heading-one" style="text-align: center; margin-bottom: 47px">
      Komisi BPMIF
    </h1>
    <p class="lead-two" style="text-align: center; margin-bottom: 203px">
      penjelasan singkat tentang apa itu Komisi
    </p>

    <div>
      <div class="container-bar">
        <div class="container">
          <button class="item heading-five">
            KOMISI I
          </button>
          <button class="item heading-five">
            KOMISI II
          </button>
          <button class="item heading-five">
            KOMISI III
          </button>
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
            <h1 class="heading-six">John Doe</h1>
            <p class="lead-seven">Kepala Departemen MSD</p>
            <p class="lead-four">
              Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF
              FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF
              FILKOM UB.
            </p>
          </div>
        </div>
      </div>
      <div class="other-dept">
        <div class="box-other-dept">
          <h3 class="heading-seven">Nama</h3>
          <p class="lead-four">Manager Manajemen Sumber Daya</p>
        </div>
        <div class="box-other-dept">
          <h3 class="heading-seven">Nama</h3>
          <p class="lead-four">Manager Manajemen Sumber Daya</p>
        </div>
        <div class="box-other-dept">
          <h3 class="heading-seven">Nama</h3>
          <p class="lead-four">Manager Manajemen Sumber Daya</p>
        </div>
        <div class="box-other-dept">
          <h3 class="heading-seven">Nama</h3>
          <p class="lead-four">Manager Manajemen Sumber Daya</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.container-bar {
  width: 100%;
  background-color: #500e00;
}
.container-bar .container {
  display: flex;
  justify-content: space-between;
}
.item {
  // Delete all button style
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  // Set new style
  width: 100%;
  height: 63px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7d1700;
}

.item:hover {
  background-color: #511407;
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
      background-image: url("https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
      background-size: cover;
      background-position: center;
    }
  }

  .header-content-box {
    width: 100%;
    height: 433px;
    background-color: #132227;

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
      h1,
      p {
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
    background-image: linear-gradient(
        rgba(24, 25, 31, 0.8),
        rgba(24, 25, 31, 0.8)
      ),
      url("https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1,
    p {
      text-align: center;
    }
  }
}
</style>
