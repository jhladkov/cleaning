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
  </nav>
</template>

<script>

export default {
  props: {
    navList: Array
  },
  setup() {

  }
}
</script>

<style scoped>

</style>