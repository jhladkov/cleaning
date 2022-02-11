<template>
  <button
      class="button"
      :class="className"
  >{{text}}</button>
</template>

<script>
export default {
  props:{
    className: String,
    text: String,
  }
}
</script>

<style scoped>

</style>