<template>
  <div class="background">
    <div class="container">
      <div class="row">
        <div class="col-md">
          <addr-social></addr-social>
        </div>
        <div class="col-md maps-container">
          <maps-comp></maps-comp>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddrSocial from "../Contact/AddrSocial.vue";
import Maps from "../Contact/Maps.vue";

export default {
  components: {
    "addr-social": AddrSocial,
    "maps-comp": Maps,
  },
};
</script>

<style lang="scss" scoped>
.background {
  width: 100%;
  background-color: #2e1919;
  padding: 128px 0;
}

* {
  color: white;
}

.maps-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .maps-container {
    margin-top: 50px;
    justify-content: center;
  }
}
</style>
