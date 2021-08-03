<template>
  <div class="header-light">
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .header-light {
    width: 100%;
    height: 337px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>