<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <router-link class="page-link arrow-icon" to="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>
      <li class="page-item"><router-link class="page-link number-icon" to="#">1</router-link></li>
      <li class="page-item"><router-link class="page-link number-icon" to="#">2</router-link></li>
      <li class="page-item"><router-link class="page-link number-icon" to="#">3</router-link></li>
      <li class="page-item"><router-link class="page-link number-icon" to="#">4</router-link></li>
      <li class="page-item"><router-link class="page-link number-icon" to="#">5</router-link></li>
      <li class="page-item"><router-link class="page-link number-icon" to="#">6</router-link></li>
      <li class="page-item"><router-link class="page-link number-icon" to="#">7</router-link></li>
      <li class="page-item">
        <router-link class="page-link arrow-icon" to="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

</script>

<style lang="scss" scoped>

* {
  color: white;
}

.page-item {
  margin: 0 6px;
}

.arrow-icon {
  background-color: #19292E;
}

.number-icon {
  background-color: #005F7D;
}

</style>
