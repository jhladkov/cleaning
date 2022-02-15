<template>
  <main>
    <Header v-once/>
    <div class="main-wrapper">
      <router-view/>
    </div>
    <Footer v-once/>
  </main>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {Footer, Header}
}
</script>

<style src="./assets/styles.scss" lang="scss">

</style>