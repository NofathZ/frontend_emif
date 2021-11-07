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
  background-image: linear-gradient(rgba(24, 25, 31, 0.4) 70%,rgba(24, 25, 31, 1)), url('https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
  background-position: center center;
  background-size: cover;
  position: relative;
  border: 5px solid rgb(255, 255, 255);
  box-sizing: border-box;
  border-radius: 10px;
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
