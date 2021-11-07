<template>
  <div class="dark-container">
    <div class="newpost-wrapper">
      <h2 class="heading-two" style="text-align: center; color: white">Postingan Terbaru</h2>
      <div class="list-post">
        <div v-for="(latest, index) in latests" :key="index">
          <new-post-box :latest="latest"></new-post-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewPostBox from './NewPostBox.vue';

export default {
  components: {
    'new-post-box': NewPostBox
  },
  data: function() {
    return {
      latests: []
    };
  },
  methods: {
    getLatest () {
        axios.get('api/posts/latest')
      .then( (response) =>{
        this.latests = response.data
      } )
    }
  },
  created() {
    this.getLatest();
  }
}
</script>

<style lang="scss" scoped>
.dark-container {
  background-color: #000f14;
  padding: 80px 0;
}

.list-post {
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
}
</style>
