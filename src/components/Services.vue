<template>
  <Section class-name="services">
    <Title
        class-name="services__title"
        title="Наши услуги"
    />
    <div class="services__content content">
      <ServiceBlock
          v-for="block in state.blocks"
          :key="block.id"
          :block-info="block"
          v-scrollanimation
          text="Больше информации"
      />
    </div>
  </Section>
</template>

<script>
import Section from "../hoc/Section";
import Title from "../UI/Title";
import ServiceBlock from "./ServiceBlock";
import {reactive} from "vue";

export default {
  components: {ServiceBlock, Title, Section},
  setup() {
    const state = reactive({
      blocks: [
        {
          id: Math.floor(Math.random() * 10000),
          index: 0,
          title: 'Мойка окон (за одно)',
          prise: 250,
          src: './img/service/block1.png'
        },
        {
          id: Math.floor(Math.random() * 10000),
          index: 1,
          title: 'Мойка квартир и офисов',
          prise: 500  ,
          src: './img/service/block1.png'
        },
        {
          id: Math.floor(Math.random() * 10000),
          index: 2,
          title: 'Уборка после ремонта',
          prise: 1000,
          src: './img/service/block1.png'
        },
        {
          id: Math.floor(Math.random() * 10000),
          index: 3,
          title: 'Химчистка',
          prise: 1000,
          src: './img/service/block1.png'
        },
        {
          id: Math.floor(Math.random() * 10000),
          index: 4,
          title: 'Озонация',
          prise: 1500,
          src: './img/service/block1.png'
        },
        {
          id: Math.floor(Math.random() * 10000),
          index: 5,
          title: 'Дезифекция, дератизация',
          prise: 1000,
          src: './img/service/block1.png'
        },

      ],
    })

    return {
      state
    }
  }
}
</script>
