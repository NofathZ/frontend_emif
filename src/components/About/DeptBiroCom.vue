<template>
  <div>
    <h1 class="heading-one" style="text-align: center; margin-bottom: 47px">
      Departemen
    </h1>
    <p class="lead-two" style="text-align: center; margin-bottom: 203px">
      penjelasan singkat tentang apa itu departemen
    </p>

    <div>
      <div class="container-bar">
        <div class="container">
          <button
            v-for="(group, index) in groups"
            :key="index"
            class="item heading-five"
            v-on:click="setIndexShow(index)"
          >
            {{ group.group }}
          </button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="header-dept">
        <div class="header-img-box">
          <div
            class="img-box"
            style="
              background-image: url('https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
            "
          ></div>
        </div>
        <div class="header-content-box">
          <div class="header-explain-box">
            <h1 class="heading-six">
              {{ groups[indexShow].head.name }}
            </h1>
            <p class="lead-seven">
              Kepala Departemen {{ groups[indexShow].group }}
            </p>
            <p class="lead-four">
              {{ groups[indexShow].head.task }}
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

<script>
export default {
  props: ["groups"],
  data: function () {
    return {
      indexShow: 0,
    };
  },
  methods: {
    setIndexShow(number) {
      this.indexShow = number;
    },
  },
};
</script>

<style lang="scss" scoped>
.container-bar {
  width: 100%;
  background-color: #1d404b;
}
.container-bar .container {
  display: flex;
  justify-content: space-between;
}
.item {
  /* Delete all button style */
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  /* Set new style */
  width: 100%;
  height: 63px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #005f7d;
}

.item:hover {
  background-color: #083b4d;
}

.staff-heading {
  margin-top: 70px;
  margin-bottom: 50px;
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
    }

    .header-explain-box {
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
    .header-content-box {
      width: 433px;
      margin: 0px auto;
      div {
        h1,
        p {
          width: 100%;
          text-align: center;
        }
      }
    }
  }

  .other-dept {
    width: 433px;
    margin: 0 auto;
  }
}

@media screen and (min-width: 993px) {
  .other-dept {
    width: 100%;
  }
}

.other-dept {
  display: flex;
  flex-wrap: wrap;

  .box-other-dept {
    height: 295px;
    background-image: linear-gradient(
        hsla(231, 13%, 11%, 0.5),
        hsla(231, 13%, 11%, 0.5)
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

@media screen and (max-width: 992px) {
  .box-other-dept {
    width: 100%;
  }
}

@media screen and (min-width: 993px) {
  .box-other-dept {
    flex: 1;
  }
}
</style>
