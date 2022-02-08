<template>
  <Section class-name="introduction">
    <Container>
      <div
          class="introduction__content content"
          v-scrollanimation
      >
        <p class="content__text">
          Лучшая клининговая служба в <span>мире</span>
        </p>
        <Svg
            class-name="content__icon"
            viewBox="0 0 24 24"
            :d="state.d"
        />
      </div>
    </Container>
  </Section>
</template>

<script>
import {reactive} from "vue";

export default {
  setup() {
    const state = reactive({
      d: 'M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z'
    })

    return {
      state
    }
  }
}
</script>

<style scoped>

</style>