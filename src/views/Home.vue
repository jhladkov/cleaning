<template>
 <Introduction/>
  <Container>
    <About/>
    <OurOffer/>
  </Container>
</template>

<script>

import Introduction from "../components/Introduction";
import About from "../components/About";
import Container from "../hoc/Container";
import OurOffer from "../components/OurOffer";

export default {
  components: {OurOffer, Container, About, Introduction},

}
</script>
