<template>
  <div class="card-container">
    <router-link class="heading-three" style="color: white; text-decoration: none" v-bind:to="'/' + category.slug + '/' + slug">
        <div class="img-box"></div>
        <p class="heading-seven" style="text-align: center; padding: 0 10px; margin-top: 19px">{{ recommendation.title }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['recommendation'],
  data: function() {
    return {
      category: [],
      slug: []
    };
  },
  methods: {
    getCategory () {
      axios.get('api/posts/' + this.recommendation.slug + '/category')
      .then( (response) =>{
        this.category = response.data
      } )
    },
    getRecom() {
      this.slug = this.recommendation.slug
    }
  },
  created() {
    this.getCategory();
    this.getRecom();
  }
}
</script>

<style lang="scss" scoped>

.card-container {
  width: 233px;
}

.img-box {
  width: 233px;
  height: 233px;
  background-image: url('https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
  background-size: cover;
  background-position: center;
  border: 5px solid black;
}

</style>
