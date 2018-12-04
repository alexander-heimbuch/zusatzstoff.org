<template>
  <div class="layout-grid" :class="{[`rows-${count}`]: true}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['rows'],
  data () {
    return {
      count: this.rows || 3
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout-grid {
    display: grid;
    grid-gap: 10px;
    margin-bottom: 1em;
  }

  .rows-2 {
    grid-template-columns: 50% 50%;
  }

  .rows-3 {
    grid-template-columns: 33% 33% 33%;
  }

  .rows-4 {
    grid-template-columns: 25% 25% 25% 25%;
  }

  @media only screen and (max-width: 800px) {
    .layout-grid {
      grid-template-columns: 50% 50%;
    }
  }

  @media only screen and (max-width: 400px) {
    .layout-grid {
      grid-template-columns: 100%;
    }
  }
</style>
