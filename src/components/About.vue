<template>
  <Section
      v-scrollanimation
      class-name="about"
  >
    <Title
        class-name="about__title"
        title="О нас"
    />
    <div class="about__content content">
      <div class="content__img">
        <Img src="./img/about.jpg"/>
      </div>
      <div class="content__info info">
        <p>{{ textInfo }}</p>
      </div>
    </div>
  </Section>
</template>

<script>
import Title from "../UI/Title";
import {computed} from "vue";

export default {
  components: {Title},
  setup() {
    const textInfo = computed(() => 'Домашний помощник:- это помощь пожилым людям в быту,закупка продовольствия, лекарств,' +
        ' мелкий ремонт,доставка.В основу названия ,,домашний помощник ‘’ ,' +
        ' как основное направление, клининговые услуги но попутно широкий спектр по мелкому домашнему ремонту' +
        '.( замена дверных замков, водопроводных кранов, замена розеток) и других поручений'
    )
    return {
      textInfo
    }
  }
}
</script>

<style scoped>

</style>