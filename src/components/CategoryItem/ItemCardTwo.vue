<template>
  <div class="container" style="margin-bottom: 88px">
    <div class="row">
      <div class="col-lg-4 d-lg-none">
        <div class="img-box"></div>
      </div>
      <div class="col-lg-8 px-3 d-flex flex-column justify-content-center" style="color: white">
        <h2 class="heading-two">{{ item.title }}</h2>
        <p class="lead-five">Dipublikasi pada {{ item.published_at }} oleh {{ user.name }} </p>
        <p class="lead-three">
          {{ item.content }} ...
          <a class="heading-three" style="color: white; text-decoration: none" v-bind:href="'/#/' + category.slug + '/' + item.slug">Baca selengkapnya</a>
        </p>
        <p class="heading-seven">
          #beasiswa, #unggulan, #beasiswajuli2021
        </p>
      </div>
      <div class="col-lg-4 d-none d-lg-block">
        <div class="img-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data: function () {
    return{
      user: [],
      category: []
    }
  },
  methods: {
    getUser () {
        axios.get('api/posts/' + this.item.id + '/user')
      .then( (response) =>{
        this.user = response.data
      } )
    },
    getCategory () {
        axios.get('api/posts/' + this.item.slug + '/category')
      .then( (response) =>{
        this.category = response.data
      } )
    },
    sliceContent(){
      this.item.content = this.item.content.slice(0, 300)
    },
  },
  created() {
    this.getUser();
    this.getCategory();
    this.sliceContent();
  }
}
</script>

<style lang="scss" scoped>
.img-box {
  width: 319px;
  height: 319px;
  border: 5px solid black;
  background-image: url('https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
  background-size: cover;
  background-position: center;
}
.read-more {

}
</style>
