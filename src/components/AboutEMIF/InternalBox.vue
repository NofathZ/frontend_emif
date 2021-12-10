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
            photo: require("../../assets/img/profile-logo.svg"),
          },
          bph: [
            {
              name: "Aldi Rahman Wijaya",
              jabatan: "Anggota Manajemen Sumber Daya Kabinet",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Andi Muhammad Rafly",
              jabatan: "Anggota Manajemen Sumber Daya Kabinet",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Lutfi Mitra Tanjung",
              jabatan: "Anggota Manajemen Sumber Daya Kabinet",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Hensel Donato Jahja",
              jabatan: "Anggota Manajemen Sumber Daya Proker",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Erika Khoirunisa",
              jabatan: "Anggota Manajemen Sumber Daya Proker",
              photo: require("../../assets/img/AboutEMIF/MSDP/er2.png"),
            },
            {
              name: "Budi Iswanto",
              jabatan: "Anggota Manajemen Sumber Daya Proker",
              photo: require("../../assets/img/AboutEMIF/MSDP/budi.png"),
            },
          ],
        },
        {
          group: "SOSMA",
          head: {
            name: "Annisah Amalia",
            task: "Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB.",
            photo: require("../../assets/img/AboutEMIF/SOSMA/annisah2.png"),
          },
          bph: [
            {
              name: "Yolanda Saputri",
              jabatan: "Wakil Ketua Departemen",
              photo: require("../../assets/img/AboutEMIF/SOSMA/yola.png"),
            },
          ],          
          member: [
            {
              name: "Muhammad Hafidh Ilmi Nafi'an",
              jabatan: "Staf SOSMA",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Sholeh Alfarys",
              jabatan: "Staf SOSMA",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Rosa Devi Phutpitasari",
              jabatan: "Staf SOSMA",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Muhammad Ariz Putra Rianto",
              jabatan: "Staf SOSMA",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Hafizh Daffa Septianto",
              jabatan: "Staf SOSMA",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Ahmad Wildan Jauhari",
              jabatan: "Staf SOSMA",
              photo: require("../../assets/img/profile-logo.svg"),
            }
          ]
        },
        {
          group: "PSDM",
          head: {
            name: "Afif Naufal Dhaifullah",
            task: "Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB.",
            photo: require("../../assets/img/profile-logo.svg"),
          },
          bph: [
            {
              name: "Iwang Aryasatya Pratama",
              jabatan: "Wakil Ketua Departemen",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Tsany Rijalu Ahimsa",
              jabatan: "Wakil Ketua Departemen",
              photo: require("../../assets/img/profile-logo.svg"),
            },
          ],
          member: [
            {
              name: "Andika Irza Pradana",
              jabatan: "Staf PSDM",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Faishal Afif",
              jabatan: "Staf PSDM",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Rimul Azilah",
              jabatan: "Staf PSDM",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Thareq Abel Ramadhan",
              jabatan: "Staf PSDM",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Elok Nuraida Kusuma Dewi",
              jabatan: "Staf PSDM",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Sza Sza Amulya Larasati",
              jabatan: "Staf PSDM",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Joshua Felix Potalangi",
              jabatan: "Staf PSDM",
              photo: require("../../assets/img/profile-logo.svg"),
            }
          ]
        },
        {
          group: "ADVOKESMA",
          head: {
            name: "Nadia Putri Nur Ramadhani",
            task: "Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB.",
            photo: require("../../assets/img/AboutEMIF/ADVO/ketua.png"),
          },
          bph: [
            {
              name: "Farrel Arvino Ilhamsyah",
              jabatan: "Wakil Ketua Departemen",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Tita Alfiana",
              jabatan: "Wakil Ketua Departemen",
              photo: require("../../assets/img/AboutEMIF/ADVO/wakil2.png"),
            },
          ],
          member: [
            {
              name: "Salma Lathifah",
              jabatan: "Staf ADVOKESMA",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Muhammad Huda Nugraha",
              jabatan: "Staf ADVOKESMA",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Shabira Widyadhari",
              jabatan: "Staf ADVOKESMA",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Tony Andhika Mahendra",
              jabatan: "Staf ADVOKESMA",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Febrian Diaz Maulana",
              jabatan: "Staf ADVOKESMA",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Cindy Prastika Amara Putri",
              jabatan: "Staf ADVOKESMA",
              photo: require("../../assets/img/profile-logo.svg"),
            }
          ]
        },
        {
          group: "PIP",
          head: {
            name: "Brilian Ade Putra",
            task: "Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB.",
            photo: require("../../assets/img/AboutEMIF/PIP/brillian2.png"),
          },
          bph: [
            {
              name: "Naufal Fadhiil Rafino",
              jabatan: "Wakil Ketua Departemen",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Audrey Ardelia",
              jabatan: "Wakil Ketua Departemen",
              photo: require("../../assets/img/profile-logo.svg"),
            },
          ],
          member: [
            {
              name: "Billy Kurniananda",
              jabatan: "Staf PIP",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Nurul Fajriyah Al Maulidiyah",
              jabatan: "Staf PIP",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Johan Adi Pradana",
              jabatan: "Staf PIP",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Firman Afrialdy",
              jabatan: "Staf PIP",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Amanda Vania Audrey N.K.Z",
              jabatan: "Staf PIP",
              photo: require("../../assets/img/profile-logo.svg"),
            }
          ]
        },
      ],
      biro: [
        {
          group: "KOMINFO",
          head: {
            name: "Reynard Euginio Tjokro",
            task: "Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB.",
            photo: require("../../assets/img/AboutEMIF/KOMINFO/rey2.png"),
          },
          bph: [
            {
              name: "Novian Ilham Ramadhan",
              jabatan: "Wakil Ketua Biro",
              photo: require("../../assets/img/AboutEMIF/KOMINFO/nov.png"),
            },
            {
              name: "Arif Wiranata",
              jabatan: "Wakil Ketua Biro",
              photo: require("../../assets/img/AboutEMIF/KOMINFO/wira.png"),
            },
          ],
          member: [
            {
              name: "Hafez Alvanro",
              jabatan: "Staf KOMINFO",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Mutiharis Dauber Panjaitan",
              jabatan: "Staf KOMINFO",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Safinatunnajah Mutiara Putri",
              jabatan: "Staf KOMINFO",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Anggasta Aji Azhari",
              jabatan: "Staf KOMINFO",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Diana Ayu Sukma Putri",
              jabatan: "Staf KOMINFO",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Muhammad Azwar Kemal Abdillah",
              jabatan: "Staf KOMINFO",
              photo: require("../../assets/img/profile-logo.svg"),
            }
          ]
        },
        {
          group: "IT",
          head: {
            name: "M. Sabran Fauzan",
            task: "Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB.",
            photo: require("../../assets/img/profile-logo.svg"),

          },
          bph: [
            {
              name: "Ali Akbar",
              jabatan: "Wakil Ketua Biro",
              photo: require("../../assets/img/profile-logo.svg"),
            },
          ],
          member: [
            {
              name: "Nofath Zukhrufi Haideal",
              jabatan: "Staf IT",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Faiz Aulia Al Farisi",
              jabatan: "Staf IT",
              photo: require("../../assets/img/profile-logo.svg"),
            },
          ]
        },
        {
          group: "BUMH",
          head: {
            name: "Raihan Haikal",
            task: "Bertanggung jawab atas seluruh kegiatan yang diadakan oleh EMIF FILKOM UB dan bertindak sebagai pengambil kebijakan tertinggi EMIF FILKOM UB.",
            photo: require("../../assets/img/profile-logo.svg"),
          },
          bph: [
            {
              name: "Habib Bahari Khoirullah",
              jabatan: "Wakil Ketua Biro",
              photo: require("../../assets/img/profile-logo.svg"),
            },
          ],
          member: [
            {
              name: "Wahyu Rafi` Adi Wicaksono",
              jabatan: "Staf BUMH",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Salsabila Dita Prasetya",
              jabatan: "Staf BUMH",
              photo: require("../../assets/img/profile-logo.svg"),
            },
            {
              name: "Aurelia Sukianto",
              jabatan: "Staf BUMH",
              photo: require("../../assets/img/profile-logo.svg"),
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
