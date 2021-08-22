<template>
  <div class="card-container">
    <div class="hover-card">
      <div class="text-box-hover">
        <h5 class="title heading-three" style="text-align: center; margin-bottom: 34px">Open Recruitment ROMANTICS 2021</h5>
        <p class="description lead-eight" style="text-align: center">Apa itu ROMANTICS? Cek info selengkapnya di Rincian di bawahApa itu ROMANTICS? Cek info selengkapnya di Rincian di bawah</p>
      </div>
      <div class="opt-box d-flex justify-content-around align-items-center">
        <button class="button-opt rincian-btn heading-five">Rincian</button>
        <button class="button-opt daftar-btn heading-five">Daftar</button>
      </div>
    </div>
    <p class="heading-three text-not-hover">Open Recruitment ROMANTICS 2021</p>
  </div>
</template>

<script>


export default {
}

</script>

<style lang="scss" scoped>

* {
  color: white;
}

.card-container {
  width: 251px;
  min-height: 251px;
  background-image: linear-gradient(rgba(24, 25, 31, 0.4) 70%,rgba(24, 25, 31, 1)), url('https://s3-alpha-sig.figma.com/img/6197/648a/a17507e10af66c41354023e774067691?Expires=1630281600&Signature=cn8AplEB8tfA9e9qpydWkfuK5vR8J10LLp-24ok-AY2T4DhnkSMsakJpdfjh2f5JYPUCnLfOLuPgNUr1chbusX8dM4dIp5AvGWEPcJ8StVbMM410E3jQDtB6RDQYJqUl6-DgG0KXzxmf5Pp863Uc4kllnfNzM-6rsHx8xXgcB~4Ps53iDwVd5CQ4tVZchooFy4hweH80A13n~7oRI0cIha3YE99NnZotP3cY9D3R9seYQtMeWy6YxyCQpxR9ATTyktaeQvQa7NMzzZx4CHXvnwGPJx-e8SU2MTNx12Zyk7Lr-YHt5Y2thO2iY8Ir6jUEF~mKOfB88gnL8KiYKAeUhA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
  background-position: center center;
  background-size: cover;
  position: relative;
  border: 5px solid black;
  box-sizing: border-box;
}

.card-container:hover .text-not-hover {
  display: none;
}

.text-not-hover {
  color: white;
  position: absolute;
  text-align: center;
  bottom: 0;
  width: 251px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 576px) {
  .text-not-hover {
    display: none;
  }
  .hover-card {
    opacity: 1;
  }
}

@media screen and (min-width: 577px) {
  .hover-card {
    opacity: 0;
  }
  .hover-card:hover {
    opacity: 1;
    transition: 0.2s;
  }
}

.hover-card {
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(24, 25, 31, 0.6),rgba(24, 25, 31, 0.6));
  transition: 0.2s;
}

.text-box-hover {
  min-height: 200px;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
}

.opt-box {
  min-height: 51px; 
  padding-bottom: 18px;
}

.button-opt {
  // delete all button style
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;

  // set new style
  width: 105px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rincian-btn {
  background-color: #FFC804;
  color: black;
}

.rincian-btn:hover {
  background-color: #ffc904f1;
}
.rincian-btn:active {
  background-color: #ffc904dc;
}

.daftar-btn {
  background-color: #ffffff;
  color: black;
}
.daftar-btn:hover {
  background-color: #ffffffec;
}
.daftar-btn:active {
  background-color: #ffffffda;
}

</style>
