<template>
  <div class="dark-container d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="d-flex justify-content-center align-items-start flex-column">
        <h1 class="text-white heading-one" style="margin-bottom: 39px">
          {{ this.headerType }}
        </h1>
        <p class="text-white lead-four-two">
          {{ this.headerDesc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["headerType", "headerDesc"]
};
</script>

<style lang="scss" scoped>
.dark-container {
  height: 501px;
  width: 100%;
  background-color: #002103;
}
</style>
