<template>
  <header
      class="header"
      :class="{'stop-slick': state.stopSlick, slick: state.slickHeader}"
  >
    <Container>
      <div class="header__inner">
        <Logo class-name="header__logo"/>
        <Navigation
            :nav-list="state.listArr"
            @changeRoute="scrollUp"
        />
        <div class="header__open hidden">
          <Svg
              view-box="0 0 20 20"
              :d="dSvg"
              @click="openMenu"
          />
        </div>
      </div>
    </Container>
  </header>
</template>

<script>
import Container from "../hoc/Container";
import Img from "../UI/Img";
import Navigation from "./Navigation";
import {computed, reactive, watchEffect} from "vue";
import {useRoute} from 'vue-router'
import Logo from "./Logo";
import {useStore} from "vuex";
import {scrollUp} from "../utilities/scrollUp";

export default {
  components: {Logo, Navigation, Img, Container},

  setup() {
    const router = useRoute()
    const store = useStore()

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

    const dSvg = computed(() => 'M0 3h20v2h-20v-2zM0 9h20v2h-20v-2zM0 15h20v2h-20v-2z')

    const windowScroll = () => {
      if (window.scrollY > 0) {
        state.slickHeader = true
      }else {
        state.slickHeader = false
      }
    }

   const openMenu = () => {
      store.dispatch('changeHideMenu')
   }

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
      state,scrollUp,openMenu,dSvg
    }
  }
}
</script>
