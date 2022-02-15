<template>
  <Section class-name="offer" v-scrollanimation>
    <Title class-name="" title="Наши преимущества"/>
    <div class="offer__content content">
      <div class="content__info-text">
        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam dicta eligendi error harum labore nam nisi, optio voluptas. Alias eveniet explicabo facere fugiat ipsum laboriosam maxime, veniam veritatis.</span><span>Ab accusamus ad aperiam aspernatur assumenda consectetur deserunt laboriosam modi sed temporibus! Alias aliquam architecto aspernatur, at aut commodi dicta dolores eum explicabo nam numquam sed, suscipit veniam, voluptas voluptatum.</span>
        </p>
      </div>
      <div class="content__blocks block">
        <div
            class="block__wrapper"
            v-for="block in state.blocks"
            :key="block.id"
        >
          <Svg
              class-name="block__img"
              :view-box="block.svgInfo.viewBox"
              :d="block.svgInfo.d"
          />
          <div class="block__inner">
            <h4 class="block__title">{{block.title}}</h4>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
import Section from "../hoc/Section";
import Title from "../UI/Title";
import Svg from "../UI/Svg";
import {reactive} from "vue";

export default {
  components: {Svg, Title, Section},
  setup() {
    const state = reactive({
      blocks: [
        {
          id: Math.floor(Math.random() * 10000),
          svgInfo: {
            viewBox:'0 0 32 32',
            d: 'M20.3 14h7.207c0.829 0 1.493 0.672 1.493 1.5 0 0.834-0.668 1.5-1.493 1.5h-3.507v1h2.507c0.829 0 1.493 0.672 1.493 1.5 0 0.834-0.668 1.5-1.493 1.5h-3.507v1h2.507c0.829 0 1.493 0.672 1.493 1.5 0 0.834-0.668 1.5-1.493 1.5h-3.507v1h1.498c0.831 0 1.502 0.672 1.502 1.5 0 0.834-0.672 1.5-1.502 1.5h-7.498l-6-2h-5.997c-0.565 0-1.003-0.447-1.003-0.998v-11.003c0-0.551 0.448-0.998 1-0.998h6.5c0 0 3.305-0.724 4.871-3.699s-0.242-7.301 2.629-7.301c3.151 0 3.501 5.5 2.3 11v0z'
          },
          text: 'Lorem ipsum dolor sit amet',
          title: 'Качество',
        },
        {
          id: Math.floor(Math.random() * 10000),
          svgInfo: {
            viewBox:'0 0 32 32',
            d: 'M15 2c-8.284 0-15 6.716-15 15s6.716 15 15 15c8.284 0 15-6.716 15-15s-6.716-15-15-15zM15 29c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12zM16 16v-4h4v-2h-4v-2h-2v2h-4v8h4v4h-4v2h4v2h2v-2h4l-0-8h-4zM14 16h-2v-4h2v4zM18 22h-2v-4h2v4z'
          },
          text: 'Lorem ipsum dolor sit amet',
          title: 'Доступные цены',
        },
        {
          id: Math.floor(Math.random() * 10000),
          svgInfo: {
            viewBox:'0 0 32 32',
            d: 'M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z'
          },
          text: 'Lorem ipsum dolor sit amet',
          title: 'Приятный сервис',
        },
        {
          id: Math.floor(Math.random() * 10000),
          svgInfo: {
            viewBox:'0 0 32 32',
            d: 'M30.5 0h-12c-0.825 0-1.977 0.477-2.561 1.061l-14.879 14.879c-0.583 0.583-0.583 1.538 0 2.121l12.879 12.879c0.583 0.583 1.538 0.583 2.121 0l14.879-14.879c0.583-0.583 1.061-1.736 1.061-2.561v-12c0-0.825-0.675-1.5-1.5-1.5zM23 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z'
          },
          text: 'Lorem ipsum dolor sit amet',
          title: 'Скидки',
        },
      ],
    })
    return{
      state
    }
  }
}
</script>

<style scoped>

</style>