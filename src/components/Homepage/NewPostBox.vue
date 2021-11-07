<template>
  <div class="card-container">
    <div class="img-box-out">
      <div class="img-box"></div>
    </div>
    <h4
      class="heading-four"
      style="color: white; text-align: center; margin-bottom: 20px"
    >
      {{ latest.title }}
    </h4>
    <a v-bind:href= "'/#/' + category.slug + '/' + latest.slug"><button class="more-btn">Baca Selengkapnya</button></a>
  </div>
</template>

<script>
export default {
  props: ['latest'],
  data: function() {
    return {
      category: []
    };
  },
  methods: {
    getCategory () {
        axios.get('api/posts/' + this.latest.slug + '/category')
      .then( (response) =>{
        this.category = response.data
      } )
    }
  },
  created() {
    this.getCategory();
  }
}
</script>

<style lang="scss" scoped>
.card-container {
  width: 263.62px;
  height: 396.37px;
  border-radius: 20px;
  background-color: #142227;
  padding: 15px;
  margin: 25px;
}
.more-btn {
  margin: 0 auto;
  background-color: #ffc804;
  padding: 6px;
  display: block;
  border: none;

  font-style: normal;
  font-weight: bold;
  font-size: 14px;

  &:active {
    background-color: #ffc904c9;
  }
}

.img-box-out {
  margin: 0 auto;
  width: 233px;
  height: 233px;
  background-color: #0d1619;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 36px;

  .img-box {
    width: 210px;
    height: 210px;
    background-image: linear-gradient(
        rgba(24, 25, 31, 0.4) 70%,
        rgba(24, 25, 31, 1)
      ),
      url("https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
}
</style>
