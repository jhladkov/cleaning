<template>
  <h2
      class="title"
      :class="className"
  >{{title}}</h2>
</template>

<script>
export default {
  name: 'Title',
  props:{
    title:String,
    className: String
  }
}
</script>
