<template>
  <main>
    <Header v-once/>
    <BurgerMenu/>
    <div class="main-wrapper">
      <router-view/>
    </div>
    <Footer v-once/>
  </main>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";

export default {
  components: {BurgerMenu, Footer, Header}
}
</script>

<style src="./assets/styles.scss" lang="scss">

</style>