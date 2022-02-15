<template>
  <header
      class="header"
      :class="
       state.stopSlick ? 'stop-slick' :  state.slickHeader ? 'slick' : ''"

  >
    <Container>
      <div class="header__inner">
        <Logo class-name="header__logo"/>
        <Navigation
            :nav-list="state.listArr"
            @changeRoute="scrollUp"
        />
      </div>
    </Container>
  </header>
</template>

<script>
import Container from "../hoc/Container";
import Img from "../UI/Img";
import Navigation from "./Navigation";
import {reactive,onMounted,watchEffect} from "vue";
import {useRoute} from 'vue-router'
import Logo from "./Logo";

export default {
  components: {Logo, Navigation, Img, Container},

  setup() {
    const router = useRoute()

    const state = reactive({
      listArr: [
        {
          id: Math.floor(Math.random() * 10000),
          value: 'Главая',
          path: '/',
        },
        {
          id: Math.floor(Math.random() * 10000),
          value: 'О нас',
          path: '/about',
        },
        {
          id: Math.floor(Math.random() * 10000),
          value: 'Услуги',
          path: '/services',
        },
      ],
      slickHeader: false,
      stopSlick: false
    })

    const windowScroll = () => {
      if (window.scrollY > 0) {
        state.slickHeader = true
      }else {
        state.slickHeader = false
      }
    }

    const scrollUp = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    onMounted(() => {

    })

    watchEffect(() => {
      if (router.name === 'Home') {
        windowScroll()
        state.stopSlick = false
        window.addEventListener('scroll', windowScroll)
      }else {
        state.slickHeader = false
        state.stopSlick = true
        window.removeEventListener('scroll', windowScroll)
      }

    })

    return {
      state,scrollUp
    }
  }
}
</script>
