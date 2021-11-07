<template>
  <div class="bg-gradient">
    <keanggotaan style="margin-bottom: 203px"></keanggotaan>
    <dept-biro-com v-bind:groups="komisi" style="padding-bottom: 232px" />
  </div>
</template>

<script>

import Keanggotaan from '../AboutBPMIF/Keanggotaan.vue'
import DeptBiroCom from '../About/DeptBiroCom.vue'

export default {
  components: {
    'keanggotaan': Keanggotaan,
    'dept-biro-com': DeptBiroCom
  },
  data: function() {
    return {
      komisi: [
        {
          groups: "Komisi I",
          head: {
            name: "Nama Kepala Komisi I",
            task:
              "Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB."
          },
          member: [
            {
              name: "Nama 1",
              jabatan: "Jabatan 1"
            },
            {
              name: "Nama 2",
              jabatan: "Jabatan 2"
            },
            {
              name: "Nama 3",
              jabatan: "Jabatan 3"
            }
          ]
        },
        {
          groups: "Komisi II",
          head: {
            name: "Nama Kepala Komisi II",
            task:
              "Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB."
          },
          member: [
            {
              name: "Nama 1",
              jabatan: "Jabatan 1"
            },
            {
              name: "Nama 2",
              jabatan: "Jabatan 2"
            },
            {
              name: "Nama 3",
              jabatan: "Jabatan 3"
            }
          ]
        },
        {
          groups: "Komisi III",
          head: {
            name: "Nama Kepala Komisi III",
            task:
              "Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB."
          },
          member: [
            {
              name: "Nama 1",
              jabatan: "Jabatan 1"
            },
            {
              name: "Nama 2",
              jabatan: "Jabatan 2"
            },
            {
              name: "Nama 3",
              jabatan: "Jabatan 3"
            }
          ]
        },
      ],
    }
  }
}

</script>

<style lang='scss' scoped>

* {
  color: white;
}

.bg-gradient {
  // background-color: white !important;
  background-image: linear-gradient(to bottom, #132227, #181B1E, #220D0D, #300D0D, #2F0D0D) !important;
  background: none;
}

</style>
