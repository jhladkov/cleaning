<template>
  <Container>
    <Services/>
    <OrderCall/>
  </Container>
</template>

<script>
import Services from "../components/Services";
import Container from "../hoc/Container";
import OrderCall from "../components/OrderCall";
export default {
  components: {OrderCall, Container, Services}
}
</script>
