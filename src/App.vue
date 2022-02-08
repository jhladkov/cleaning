<template>
  <main>
    <Header/>
    <div class="main-wrapper">
      <router-view/>
    </div>
  </main>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {Header}
}
</script>

<style src="./assets/styles.scss" lang="scss">

</style>