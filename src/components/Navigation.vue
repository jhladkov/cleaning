<template>
  <nav class="header__menu menu">
    <ul class="menu__list">
      <li
          v-for="item in navList"
          :key="item.id"
          class="menu__item"
          @click="$emit('changeRoute')"
      >
        <router-link
            :to="item.path"
            class="menu__link"
        >
          {{ item.value }}
        </router-link>
      </li>

    </ul>
    <Call/>
  </nav>
</template>

<script>

import Call from "./Call";
export default {
  components: {Call},
  props: {
    navList: Array
  },
}
</script>

<style scoped>

</style>