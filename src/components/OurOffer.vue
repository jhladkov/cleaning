<template>
  <Section class-name="offer" v-scrollanimation>
    <Title class-name="" title="Что мы предлагаем"/>
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
            <p class="block__description">{{block.text}}</p>
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
          title: 'Гарантируем качество',
        },
        {
          id: Math.floor(Math.random() * 10000),
          svgInfo: {
            viewBox:'0 0 32 32',
            d: 'M20.3 14h7.207c0.829 0 1.493 0.672 1.493 1.5 0 0.834-0.668 1.5-1.493 1.5h-3.507v1h2.507c0.829 0 1.493 0.672 1.493 1.5 0 0.834-0.668 1.5-1.493 1.5h-3.507v1h2.507c0.829 0 1.493 0.672 1.493 1.5 0 0.834-0.668 1.5-1.493 1.5h-3.507v1h1.498c0.831 0 1.502 0.672 1.502 1.5 0 0.834-0.672 1.5-1.502 1.5h-7.498l-6-2h-5.997c-0.565 0-1.003-0.447-1.003-0.998v-11.003c0-0.551 0.448-0.998 1-0.998h6.5c0 0 3.305-0.724 4.871-3.699s-0.242-7.301 2.629-7.301c3.151 0 3.501 5.5 2.3 11v0z'
          },
          text: 'Lorem ipsum dolor sit amet',
          title: 'Гарантируем качество',
        },
        {
          id: Math.floor(Math.random() * 10000),
          svgInfo: {
            viewBox:'0 0 32 32',
            d: 'M20.3 14h7.207c0.829 0 1.493 0.672 1.493 1.5 0 0.834-0.668 1.5-1.493 1.5h-3.507v1h2.507c0.829 0 1.493 0.672 1.493 1.5 0 0.834-0.668 1.5-1.493 1.5h-3.507v1h2.507c0.829 0 1.493 0.672 1.493 1.5 0 0.834-0.668 1.5-1.493 1.5h-3.507v1h1.498c0.831 0 1.502 0.672 1.502 1.5 0 0.834-0.672 1.5-1.502 1.5h-7.498l-6-2h-5.997c-0.565 0-1.003-0.447-1.003-0.998v-11.003c0-0.551 0.448-0.998 1-0.998h6.5c0 0 3.305-0.724 4.871-3.699s-0.242-7.301 2.629-7.301c3.151 0 3.501 5.5 2.3 11v0z'
          },
          text: 'Lorem ipsum dolor sit amet',
          title: 'Гарантируем качество',
        },
        {
          id: Math.floor(Math.random() * 10000),
          svgInfo: {
            viewBox:'0 0 32 32',
            d: 'M20.3 14h7.207c0.829 0 1.493 0.672 1.493 1.5 0 0.834-0.668 1.5-1.493 1.5h-3.507v1h2.507c0.829 0 1.493 0.672 1.493 1.5 0 0.834-0.668 1.5-1.493 1.5h-3.507v1h2.507c0.829 0 1.493 0.672 1.493 1.5 0 0.834-0.668 1.5-1.493 1.5h-3.507v1h1.498c0.831 0 1.502 0.672 1.502 1.5 0 0.834-0.672 1.5-1.502 1.5h-7.498l-6-2h-5.997c-0.565 0-1.003-0.447-1.003-0.998v-11.003c0-0.551 0.448-0.998 1-0.998h6.5c0 0 3.305-0.724 4.871-3.699s-0.242-7.301 2.629-7.301c3.151 0 3.501 5.5 2.3 11v0z'
          },
          text: 'Lorem ipsum dolor sit amet',
          title: 'Гарантируем качество',
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