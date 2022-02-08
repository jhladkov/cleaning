<template>
  <header class="header">
    <Container>
      <div class="header__inner">
        <div class="header__logo">
            <Img src="./img/logo.png"/>
        </div>
        <Navigation :nav-list="state.listArr"/>
      </div>
    </Container>
  </header>
</template>

<script>
import Container from "../hoc/Container";
import Img from "../UI/Img";
import Navigation from "./Navigation";
import {reactive} from "vue";

export default {
  components: {Navigation, Img, Container},

  setup() {
    const state = reactive({
      listArr: [
        {
          id: Math.floor(Math.random() * 10000),
          value: 'О нас',
        },
        {
          id: Math.floor(Math.random() * 10000),
          value: 'О нас',
        },
        {
          id: Math.floor(Math.random() * 10000),
          value: 'О нас',
        },
      ]
    })
    return {
      state
    }
  }
}
</script>
