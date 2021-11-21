<template>
  <div class="bg-gradient">
    <keanggotaan style="margin-bottom: 203px"></keanggotaan>
    <dept-biro-com v-bind:groups="komisi" style="padding-bottom: 232px" />
  </div>
</template>

<script>
import Keanggotaan from "../AboutBPMIF/Keanggotaan.vue";
import DeptBiroCom from "../About/DeptBiroCom.vue";

export default {
  components: {
    keanggotaan: Keanggotaan,
    "dept-biro-com": DeptBiroCom,
  },
  data: function () {
    return {
      komisi: [
        {
          group: "Komisi I",
          head: {
            name: "Nama Kepala Komisi I",
            task: "Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB.",
            photo: require("../../assets/img/AboutEMIF/advo/dias1.png"),
          },
          member: [
            {
              name: "Nama 1",
              jabatan: "Jabatan 1",
              photo: require("../../assets/img/AboutEMIF/advo/dias1.png")
            },
            {
              name: "Nama 2",
              jabatan: "Jabatan 2",
              photo: require("../../assets/img/AboutEMIF/advo/dias1.png")
            },
            {
              name: "Nama 3",
              jabatan: "Jabatan 3",
              photo: require("../../assets/img/AboutEMIF/advo/dias1.png")
            },
          ],
        },
        {
          group: "Komisi II",
          head: {
            name: "Nama Kepala Komisi II",
            task: "Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB.",
          },
          member: [
            {
              name: "Nama 1",
              jabatan: "Jabatan 1",
              photo: require("../../assets/img/AboutEMIF/advo/dias1.png")
            },
            {
              name: "Nama 2",
              jabatan: "Jabatan 2",
              photo: require("../../assets/img/AboutEMIF/advo/dias1.png")
            },
            {
              name: "Nama 3",
              jabatan: "Jabatan 3",
              photo: require("../../assets/img/AboutEMIF/advo/dias1.png")
            },
          ],
        },
        {
          group: "Komisi III",
          head: {
            name: "Nama Kepala Komisi III",
            task: "Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB.",
          },
          member: [
            {
              name: "Nama 1",
              jabatan: "Jabatan 1",
              photo: require("../../assets/img/AboutEMIF/advo/dias1.png")
            },
            {
              name: "Nama 2",
              jabatan: "Jabatan 2",
              photo: require("../../assets/img/AboutEMIF/advo/dias1.png")
            },
            {
              name: "Nama 3",
              jabatan: "Jabatan 3",
              photo: require("../../assets/img/AboutEMIF/advo/dias1.png")
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  color: white;
}

.bg-gradient {
  // background-color: white !important;
  background-image: linear-gradient(
    to bottom,
    #132227,
    #181b1e,
    #220d0d,
    #300d0d,
    #2f0d0d
  ) !important;
  background: none;
}
</style>
