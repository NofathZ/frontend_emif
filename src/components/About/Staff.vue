<template>
  <div>
    <div class="container">
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
