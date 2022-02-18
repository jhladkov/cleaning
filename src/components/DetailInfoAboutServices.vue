<template>
  <Container>
    <Section
        class-name="service"
        v-scrollanimation
    >
      <Title
          :title="state.arrService.title"
          class-name="service__title"
      />
      <p>{{ state.arrService.description }}</p>
    </Section>
    <OrderCall/>
  </Container>
</template>

<script>
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {onMounted, reactive, ref, watchEffect} from "vue";
import Title from "../UI/Title";
import Section from "../hoc/Section";
import OrderCall from "./OrderCall";

export default {
  components: {OrderCall, Section, Title},
  setup() {
    const router = useRoute()
    const store = useStore()
    const state = reactive({
      arrService: []
    })

    watchEffect(() => {
      state.arrService = store.state.servicesInfo.find(item => item.index == router.params.id)
    })

    return {
      state
    }
  }
}
</script>
