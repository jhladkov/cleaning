<template>
 <Introduction/>
  <Container>
    <About/>
    <OurOffer/>
    <Services/>
    <OrderCall/>
  </Container>
</template>

<script>

import Introduction from "../components/Introduction";
import About from "../components/About";
import Container from "../hoc/Container";
import OurOffer from "../components/OurOffer";
import Services from "../components/Services";
import OrderCall from "../components/OrderCall";

export default {
  components: {OrderCall, Services, OurOffer, Container, About, Introduction},

}
</script>
