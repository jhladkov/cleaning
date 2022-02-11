<template>
  <Container>
    <About/>
    <OurOffer/>
  </Container>

</template>

<script>
import About from "../components/About";
import OurOffer from "../components/OurOffer";
import {onMounted} from "vue";

export default {
  components: {OurOffer, About},
  setup() {
    onMounted(() => {

    })
  }
}
</script>

<style scoped>

</style>