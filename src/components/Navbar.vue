<template>
  <b-navbar type="dark" variant="dark" toggleable="lg" sticky>
    <div class="container-md">
      <router-link class="navbar-brand" to="/">
        <img :src="HMIFLogo" alt="" />
      </router-link>

      <b-navbar-toggle
        class="navbar-toggle-btn"
        target="nav-collapse"
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <span class="navbar-text">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/"
                style="color: white"
              >
                Beranda
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/about"
                class="nav-link dropdown-toggle button-trigger"
                style="color: white"
              >
                Tentang
              </router-link>
              <div class="dropdown-menu dropdown-item-list">
                <router-link class="dropdown-item" to="/about/emif"
                  >EMIF</router-link
                >
                <router-link class="dropdown-item" to="/about/bpmif"
                  >BPMIF</router-link
                >
              </div>
            </li>

            <div>
              <router-link
                to="/categories"
                class="nav-link dropdown-toggle button-trigger"
                style="color: white"
              >
                Informasi
              </router-link>
              <div class="dropdown-menu dropdown-item-list">
                <router-link class="dropdown-item" to="/agenda"
                  >Agenda</router-link
                >
                <router-link class="dropdown-item" to="/beasiswa"
                  >Beasiswa</router-link
                >
                <router-link class="dropdown-item" to="/pengumuman"
                  >Pengumuman</router-link
                >
                <router-link class="dropdown-item" to="/lomba"
                  >Lomba</router-link
                >
                <router-link class="dropdown-item" to="/produk"
                  >Produk</router-link
                >
                <router-link class="dropdown-item" to="/lowongan"
                  >Lowongan Pekerjaan</router-link
                >
                <router-link class="dropdown-item" to="/artikel"
                  >Artikel</router-link
                >
              </div>
            </div>

            <li class="nav-item">
              <router-link class="nav-link" to="/contact" style="color: white"
                >Kontak</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/" style="color: white"
                >Fitur</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/pendaftaran"
                style="color: white"
                >Pendaftaran</router-link
              >
            </li>
          </ul>
        </span>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
import HMIFLogo from "../assets/img/hmif-logo.svg";

export default {
  data: function () {
    return {
      HMIFLogo,
    };
  },
};
</script>

<style lang="scss" scoped>
.button-trigger {
  background: none;
  border: none;
}
.button-trigger:hover ~ .dropdown-item-list {
  display: block;
}
.dropdown-item-list:hover {
  display: block;
}
.dropdown-item {
  color: black !important;
}
.dropdown-item:hover {
  background: rgba($color: #000000, $alpha: 0.2) !important;
}
.dropdown-menu {
  border: none !important;
  background: none !important;
  background: #ffffff !important;
}
</style>
