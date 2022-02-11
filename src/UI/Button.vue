<template>
  <button
      class="button"
      :class="className"
  >{{text}}</button>
</template>

<script>
export default {
  name:'Button',
  props:{
    className: String,
    text: String,
  }
}
</script>

<style scoped>

</style>