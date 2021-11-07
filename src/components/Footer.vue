<template>
  <footer class="footer-dark">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-3 item d-flex justify-content-center align-items-start">
                    <div style="display: inline-block">
                      <h3 style="margin-bottom: 30px">Utama</h3>
                      <ul>
                          <li class="footer-item"><a href="">Beranda</a></li>
                          <li class="footer-item"><a href="#/contact">Kontak</a></li>
                          <li class="footer-item"><a href="#/about">Tentang</a></li>
                      </ul>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3 item d-flex justify-content-center align-items-start">
                    <div style="display: inline-block">
                      <h3 style="margin-bottom: 30px">Tentang</h3>
                      <ul>
                          <li class="footer-item"><a href="">HMIF</a></li>
                          <li class="footer-item"><a href="#/about/EMIF">EMIF</a></li>
                          <li class="footer-item"><a href="#/about/BPMIF">BPMIF</a></li>
                      </ul>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3 item d-flex justify-content-center align-items-start">
                    <div style="display: inline-block">
                      <h3 style="margin-bottom: 30px">Informasi</h3>
                      <ul>
                          <li class="footer-item"><a href="#/pengumuman">Pengumuman</a></li>
                          <li class="footer-item"><a href="#/beasiswa">Beasiswa</a></li>
                          <li class="footer-item"><a href="#/agenda">Agenda</a></li>
                          <li class="footer-item"><a href="#/produk">Produk</a></li>
                          <li class="footer-item"><a href="#/pendaftaran">Pendaftaran</a></li>
                          <li class="footer-item"><a href="#/lowongan">Lowongan Kerja</a></li>
                      </ul>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3 item d-flex justify-content-center align-items-start">
                    <div style="display: inline-block">
                      <h3 style="margin-bottom: 30px">Fitur</h3>
                      <ul>
                          <li class="footer-item"><a href="#">Data Pemetaan PKL</a></li>
                          <li class="footer-item"><a href="#">Game Swift Engine</a></li>
                      </ul>
                    </div>
                </div>
            </div>
            <div class="emif-logo d-flex justify-content-center align-items-center">
              <img :src="EmifLogo" alt="Emif Logo" />
            </div>
            <p class="heading-three copyright">Eksekutif Mahasiswa Informatika FILKOM UB 2021<br>Copyright 2021. by Biro IT</p>
        </div>
    </footer>
</template>

<script>
import EmifLogo from '../assets/img/emif-logo-footer.svg';

export default {
  data: function() {
    return {
      EmifLogo
    }
  }
}
</script>

<style lang="scss" scoped>

.footer-item {
  margin-bottom: 12px;
}

  .footer-dark {
    padding: 86px 0 20px 0;
    color: #f0f9ff;
    background-color: #282d32;
  }

  .footer-dark h3 {
    margin-top: 0;
    margin-bottom: 12px;
    font-weight: bold;
    font-size: 16px;
  }

  .footer-dark ul {
    padding: 0;
    list-style: none;
    line-height: 1.6;
    font-size: 14px;
    margin-bottom: 0;
  }

  .footer-dark ul a {
    color: inherit;
    text-decoration: none;
    opacity: 0.6;
  }

  .footer-dark ul a:hover {
    opacity: 0.8;
  }

  @media (max-width:767px) {
    .footer-dark .item:not(.social) {
      text-align: center;
      padding-bottom: 20px;
    }
  }

  .footer-dark .item.text {
    margin-bottom: 36px;
  }

  @media (max-width:767px) {
    .footer-dark .item.text {
      margin-bottom: 0;
    }
  }

  .footer-dark .item.text p {
    opacity: 0.6;
    margin-bottom: 0;
  }

  .footer-dark .item.social {
    text-align: center;
  }

  @media (max-width:991px) {
    .footer-dark .item.social {
      text-align: center;
      margin-top: 20px;
    }
  }

  .footer-dark .item.social > a {
    font-size: 20px;
    width: 36px;
    height: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.4);
    margin: 0 8px;
    color: #fff;
    opacity: 0.75;
  }

  .footer-dark .item.social > a:hover {
    opacity: 0.9;
  }

  .footer-dark .copyright {
    text-align: center;
    font-family: 'Poppins', sans-serif !important;
    padding-top: 24px;
  }

  .emif-logo {
    margin-top: 70px;
  }
</style>
