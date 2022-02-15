<template>
  <div class="logo" :class="className">
    <Img src="./img/logo.png"/>
  </div>
</template>

<script>
export default {
  props: {
    className: String,
  }
}
</script>
