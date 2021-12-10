<template>
  <div>
    <div class="container">
      <div class="other-dept">
        <div
          v-for="(member, index) in members"
          :key="index"
          class="box-other-dept"
          v-bind:style="{
            backgroundImage:
              'linear-gradient(hsla(231, 13%, 11%, 0.5),hsla(231, 13%, 11%, 0.5)), url(' +
              member.photo +
              ')',
          }"
        >
          <h3 class="heading-seven" style="text-align: center">{{ member.name }}</h3>
          <p class="lead-four" style="text-align: center">{{ member.jabatan }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["members"],
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 992px) {
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
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
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
