<template>
  <div class="bg-gradient">
    <keanggotaan style="margin-bottom: 203px"></keanggotaan>
    <dept-biro-com v-bind:groups="departemen" style="margin-bottom: 194px" />
    <dept-biro-com v-bind:groups="biro" style="padding-bottom: 232px" />
  </div>
</template>

<script>
import Keanggotaan from "../AboutEMIF/Keanggotaan.vue";
import DeptBiroCom from "../About/DeptBiroCom.vue";

export default {
  components: {
    "keanggotaan": Keanggotaan,
    "dept-biro-com": DeptBiroCom,
  },
  data: function () {
    return {
      departemen: [
        {
          group: "MSD",
          head: {
            name: "Nama Kepala MSD",
            task: "Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB.",
          },
          member: [
            {
              name: "Nama 1",
              jabatan: "Jabatan 1",
            },
            {
              name: "Nama 2",
              jabatan: "Jabatan 2",
            },
            {
              name: "Nama 3",
              jabatan: "Jabatan 3",
            },
          ],
        },
        {
          group: "Sosma",
          head: {
            name: "Nama Kepala Sosma",
            task: "Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB.",
          },
          member: [
            {
              name: "Nama 1",
              jabatan: "Jabatan 1",
            },
            {
              name: "Nama 2",
              jabatan: "Jabatan 2",
            },
            {
              name: "Nama 3",
              jabatan: "Jabatan 3",
            },
          ],
        },
        {
          group: "PSDM",
          head: {
            name: "Nama Kepala PSDM",
            task: "Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB.",
          },
          member: [
            {
              name: "Nama 1",
              jabatan: "Jabatan 1",
            },
            {
              name: "Nama 2",
              jabatan: "Jabatan 2",
            },
            {
              name: "Nama 3",
              jabatan: "Jabatan 3",
            },
          ],
        },
        {
          group: "Advokesma",
          head: {
            name: "Nama Kepala Advokesma",
            task: "Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB.",
          },
          member: [
            {
              name: "Nama 1",
              jabatan: "Jabatan 1",
            },
            {
              name: "Nama 2",
              jabatan: "Jabatan 2",
            },
            {
              name: "Nama 3",
              jabatan: "Jabatan 3",
            },
          ],
        },
        {
          group: "PIP",
          head: {
            name: "Nama Kepala PIP",
            task: "Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB.",
          },
          member: [
            {
              name: "Nama 1",
              jabatan: "Jabatan 1",
            },
            {
              name: "Nama 2",
              jabatan: "Jabatan 2",
            },
            {
              name: "Nama 3",
              jabatan: "Jabatan 3",
            },
          ],
        },
      ],
      biro: [
        {
          group: "Kominfo",
          head: {
            name: "Nama Kepala Kominfo",
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
          group: "IT",
          head: {
            name: "Nama Kepala IT",
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
          group: "BUMH",
          head: {
            name: "Nama Kepala BUMH",
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
