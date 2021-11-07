<template>
  <b-navbar type="light" variant="dark" toggleable="lg">
    <div class="container-md">
      <a class="navbar-brand" href="/">
        <img :src="HMIFLogo" alt="" />
      </a>

      <b-navbar-toggle
        target="nav-collapse"
        style="background: white"
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <span class="navbar-text">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                href="#/"
                style="color: white"
              >
                Beranda
              </a>
            </li>
            <div>
              <a href="#/about/" class="nav-link btn btn-secondary dropdown-toggle button-trigger" style="color: white">
                Tentang
              </a>
              <div class="dropdown-menu dropdown-item-list">
                <a class="dropdown-item" href="#/about/emif">EMIF</a>
                <a class="dropdown-item" href="#/about/bpmif">BPMIF</a>
              </div>
            </div>

            <div>
              <a href="#/categories" class="nav-link btn btn-secondary dropdown-toggle button-trigger" style="color: white">
                Informasi
              </a>
              <div class="dropdown-menu dropdown-item-list">
                <a class="dropdown-item" href="#/agenda">Agenda</a>
                <a class="dropdown-item" href="#/beasiswa">Beasiswa</a>
                <a class="dropdown-item" href="#/pengumuman">Pengumuman</a>
                <a class="dropdown-item" href="#/lomba">Lomba</a>
                <a class="dropdown-item" href="#/produk">Produk</a>
                <a class="dropdown-item" href="#/lowongan"
                  >Lowongan Pekerjaan</a
                >
                <a class="dropdown-item" href="#/artikel">Artikel</a>
              </div>
            </div>

            <li class="nav-item">
              <a class="nav-link" href="#/contact" style="color: white">Kontak</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/" style="color: white">Fitur</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/pendaftaran" style="color: white">Pendaftaran</a>
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
  data: function() {
    return {
      HMIFLogo
    };
  }
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
</style>
