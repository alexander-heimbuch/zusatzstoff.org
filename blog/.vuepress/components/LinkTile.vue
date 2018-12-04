<template>
  <a class="background-card" :style="style" :href="link" target="_blank" rel="nofollow">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    props: ['link', 'background', 'title'],

    computed: {
      style () {
        if (!this.background) {
          return {}
        }

        return {
          'background-image': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.background})`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .background-card {
    display: flex;
    position: relative;
    height: 200px;
    width: 100%;
    box-shadow: 0 4px 3px -3px rgba(0, 0, 0, 0.5);
    padding: 1.5em;
    background-repeat: no-repeat;
    background-size: 100% 100%, 80% auto;
    background-position: center center;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    border-radius: 2px;
  }
</style>
