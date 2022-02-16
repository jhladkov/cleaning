<template>
  <div
      class="hide-menu"
      :class="state.open ? 'open': 'close'"
  >
    <div class="hide-menu__wrapper">
      <div class="hide-menu__close">
        <Svg
            view-box="0 0 32 32"
            d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"
            @click="closeMenu"
        />
      </div>
      <Navigation
          :nav-list="state.listArr"
          @changeRoute="scrollUp"
      />
    </div>
  </div>
</template>

<script>
import Svg from "../UI/Svg";
import Navigation from "./Navigation";
import {reactive, watchEffect} from "vue";
import {useStore} from "vuex";

export default {
  components: {Navigation, Svg},
  setup() {
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
      open: store.state.openHideMenu
    })

    const closeMenu = () => {
      store.dispatch('changeHideMenu')
    }
    const scrollUp = () => {
      store.dispatch('changeHideMenu')
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    watchEffect(() => {
      state.open = store.state.openHideMenu
    })

    return{
      state,closeMenu,scrollUp
    }
  }
}
</script>