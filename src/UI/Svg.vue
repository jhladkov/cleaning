<template>
  <svg
      :class="className"
      class="svg"
      :viewBox="viewBox"
  >
    <path :d="d"></path>
  </svg>
</template>

<script>
export default {
  name: 'Svg',
  props: {
    viewBox: String,
    d: String,
    className: String
  }
}
</script>
