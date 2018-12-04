<template>
  <img :src="src" class="image-card" />
</template>

<script>
  export default {
    props: ['src']
  }
</script>

<style lang="scss" scoped>
  .image-card {
    display: block;
    height: auto;
    width: 100%;
  }
</style>
