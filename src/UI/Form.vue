<template>
  <form
      :class="className"
      class="form"
  >
      <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    className: String,
  }
}
</script>
