<template>
  <Section v-scrollanimation class-name="about" >
      <Title
          class-name="about__title"
          title="О нас"
      />
      <div class="about__content content">
        <div class="content__img" >
          <Img src="./img/about.jpg"/>
        </div>
        <div class="content__info info" >
          <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque aut debitis distinctio ducimus fugit illum ipsa maiores, molestias nulla obcaecati odit, pariatur quae quaerat, quis saepe ullam voluptate voluptatum.</span><span>Animi at dolor, ducimus eligendi, facilis maiores mollitia, odit placeat praesentium sint tempore temporibus. Consectetur culpa cum doloremque dolores earum eveniet necessitatibus, nisi perferendis porro quae quibusdam repellat tempore voluptatibus?</span><span>Accusantium, aliquam dicta fugit ipsum iste maxime, nam nisi odio officia pariatur, quasi quo reiciendis repellendus sequi temporibus! Iusto magnam non officia velit voluptates. Alias consectetur ea earum quidem repellendus!</span></p>
        </div>
      </div>
  </Section>
</template>

<script>
import Title from "../UI/Title";
export default {
  components: {Title}
}
</script>

<style scoped>

</style>