<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link arrow-icon" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link number-icon" href="#">1</a></li>
      <li class="page-item"><a class="page-link number-icon" href="#">2</a></li>
      <li class="page-item"><a class="page-link number-icon" href="#">3</a></li>
      <li class="page-item"><a class="page-link number-icon" href="#">4</a></li>
      <li class="page-item"><a class="page-link number-icon" href="#">5</a></li>
      <li class="page-item"><a class="page-link number-icon" href="#">6</a></li>
      <li class="page-item"><a class="page-link number-icon" href="#">7</a></li>
      <li class="page-item">
        <a class="page-link arrow-icon" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
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
