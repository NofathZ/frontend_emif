<template>
  <div>
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          class="gmap_iframe"
          width="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=universitas brawijaya&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe
        ><a href="https://www.fnfgo.com/">Friday Night Funkin Mods</a>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.mapouter {
  position: relative;
  text-align: right;
  width: 100%;
  height: 500px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 100%;
  height: 500px;
}
.gmap_iframe {
  height: 500px !important;
}
</style>
