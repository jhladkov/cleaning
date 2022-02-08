<template>
  <Section class-name="introduction">
    <Container>
      <div class="introduction__content content">
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

  <Section class-name="about">
    <Container>
      <Title
          class-name="about__title"
          title="О нас"
      />
      <div class="about__content content">
        <div class="content__img">
          <Img src="./img/about.jpg"/>
        </div>
        <div class="content__info info">
          <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque aut debitis distinctio ducimus fugit illum ipsa maiores, molestias nulla obcaecati odit, pariatur quae quaerat, quis saepe ullam voluptate voluptatum.</span><span>Animi at dolor, ducimus eligendi, facilis maiores mollitia, odit placeat praesentium sint tempore temporibus. Consectetur culpa cum doloremque dolores earum eveniet necessitatibus, nisi perferendis porro quae quibusdam repellat tempore voluptatibus?</span><span>Accusantium, aliquam dicta fugit ipsum iste maxime, nam nisi odio officia pariatur, quasi quo reiciendis repellendus sequi temporibus! Iusto magnam non officia velit voluptates. Alias consectetur ea earum quidem repellendus!</span></p>
        </div>
      </div>
    </Container>
  </Section>
</template>

<script>


import Section from "../hoc/Section";
import Title from "../UI/Title";
import Container from "../hoc/Container";
import Svg from "../UI/Svg";
import {reactive} from "vue";
import Img from "../UI/Img";

export default {
  components: {Img, Svg, Container, Title, Section},
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
