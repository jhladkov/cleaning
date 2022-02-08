<template>
  <img :src="src" alt="" :class="className">
</template>

<script>
export default {
  name: 'Img',
  props:{
    className: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    }
  }
}
</script>
