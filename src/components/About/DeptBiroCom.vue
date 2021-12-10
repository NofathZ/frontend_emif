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
            v-bind:style="{
              backgroundImage: 'url(' + groups[indexShow].head.photo + ')',
            }"
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
        <div
          v-for="(bph, index) in groups[indexShow].bph"
          :key="index"
          class="box-other-dept"
          v-bind:style="{
            backgroundImage:
              'linear-gradient(hsla(231, 13%, 11%, 0.5),hsla(231, 13%, 11%, 0.5)), url(' +
              bph.photo +
              ')',
          }"
        >
          <h3 class="heading-seven" style="text-align: center">{{ bph.name }}</h3>
          <p class="lead-four" style="text-align: center">{{ bph.jabatan }}</p>
        </div>
      </div>
      <staf-com v-bind:members="groups[indexShow].member" />
    </div>
  </div>
</template>

<script>
import Staf from "../About/Staff.vue";

export default {
  props: ["groups"],
  components: {
    "staf-com": Staf,
  },
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
  computed: {
    stail() {
      return {};
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
    background-color: #a4a5a6;

    .img-box {
      height: 100%;
      width: 433px;
      background-size: cover;
      background-position: center top;
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

.other-dept {
  .box-other-dept {
    background-position: center bottom;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 1px;
    box-sizing: border-box;
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
    // background-color: white; // nanti ini disesuaikan
    background-color: rgb(68, 68, 68);
    // background-size: cover;
    // background-position: center;
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
