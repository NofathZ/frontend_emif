<template>
  <div class="background-dark">
    <div class="custom-cotainer">
      <div class="img-box" style="margin-bottom: 47px"></div>
      <h2 class="heading-two" style="margin-bottom: 22px">{{ item.title }}</h2>
      <p class="lead-five" style="margin-bottom: 18px">
        Dipublikasi pada {{ item.published_at }} oleh {{ user.name }}
      </p>
      <div>
        <p class="lead-three" style="margin-bottom: 25px">
          {{ item.content }}
        </p>
      </div>
      <p class="heading-seven" style="margin-bottom: 63px">
        #beasiswa, #unggulan, #beasiswajuli2021
      </p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data: function() {
    return {
      user: []
    };
  },
  methods: {
    getUser () {
        axios.get('api/posts/' + this.$route.params.slug + '/userBySlug')
      .then( (response) =>{
        this.user = response.data
      } )
    },
  },
  created() {
    this.getUser();
  }
};
</script>

<style lang="scss" scoped>
* {
  word-wrap: break-word;
}
.background-dark {
  width: 100%;
  background-color: #142227;
  padding: 150px 0 40px 0;
}
.custom-cotainer {
  margin: 0px auto 0px auto;
  max-width: 713px;
  color: white;
}

.img-box {
  max-width: 713px;
  background-image: url("https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
  background-size: cover;
  background-position: center;
}

.img-box:after {
  content: "";
  display: block;
  padding-top: 100%;
}
</style>
