<template>
  <div>
    <h1 class="heading-one" style="text-align: center; margin-bottom: 117px">Keanggotaan</h1>
    <ketua style="margin-bottom: 168px;"></ketua>
    <wakil-ketua style="margin-bottom: 290px"></wakil-ketua>
    <sekben :dataSekben="sekbenData[0]"></sekben>
    <sekben :dataSekben="sekbenData[1]"></sekben>
  </div>
</template>

<script>

import Ketua from '../AboutEMIF/Ketua.vue'
import WakilKetua from '../AboutEMIF/WakilKetua.vue'
import Sekben from '../AboutEMIF/Sekben.vue'

export default {
  data: function() {
    return {
      sekbenData: [
        {
          title: "Sekretaris",
          dataAnggota: [
            {
              nama: "Nama Sekretaris 1",
              jabatan: "Sekretaris 1",
              tugas: "Bertanggung jawab untuk membantu ketua umum EMIF dalam koordinasi terhadap departemen dan biro yang ada di EMIF FILKOM UB.",
              gambar: require('../../assets/img/AboutEMIF/ketua.png')
            },
            {
              nama: "Nama Sekretaris 2",
              jabatan: "Sekretaris 2",
              tugas: "Bertanggung jawab untuk membantu ketua umum EMIF dalam koordinasi terhadap departemen dan biro yang ada di EMIF FILKOM UB.",
              gambar: require('../../assets/img/AboutEMIF/ketua.png')
            }
          ]
        },
        {
          title: "Bendahara",
          dataAnggota: [
            {
              nama: "Nama Bendahara 1",
              jabatan: "Bendahara 1",
              tugas: "Bertanggung jawab untuk membantu ketua umum EMIF dalam koordinasi terhadap departemen dan biro yang ada di EMIF FILKOM UB.",
              gambar: require('../../assets/img/AboutEMIF/ketua.png')
            },
            {
              nama: "Nama Bendahara 2",
              jabatan: "Bendahara 2",
              tugas: "Bertanggung jawab untuk membantu ketua umum EMIF dalam koordinasi terhadap departemen dan biro yang ada di EMIF FILKOM UB.",
              gambar: require('../../assets/img/AboutEMIF/ketua.png')
            }
          ]
        },
      ]
    }
  },
  components: {
    'ketua': Ketua,
    'wakil-ketua': WakilKetua,
    'sekben': Sekben
  }
}

</script>

<style lang="scss" scoped>

</style>
