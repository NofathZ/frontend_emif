<template>
  <div class="header-light">
    <h1 class="heading-one">
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
// @import '../../assets/scss/_variable';

.header-light {
  width: 100%;
  height: 337px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>