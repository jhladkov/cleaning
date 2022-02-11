<template>
 <Introduction/>
  <Container>
    <About/>
    <OurOffer/>
    <Services/>
  </Container>
</template>

<script>

import Introduction from "../components/Introduction";
import About from "../components/About";
import Container from "../hoc/Container";
import OurOffer from "../components/OurOffer";
import Services from "../components/Services";

export default {
  components: {Services, OurOffer, Container, About, Introduction},

}
</script>
