<template>
  <nav class="header__menu menu">
    <ul class="menu__list">
      <li
          v-for="item in navList"
          :key="item.id"
          class="menu__item"
      >
        {{ item.value }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    navList: Array
  }
}
</script>

<style scoped>

</style>