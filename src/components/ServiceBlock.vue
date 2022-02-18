<template>
  <div class="content__block item-block">
    <div class="item-block__img">
      <Img :src="blockInfo.src"/>
    </div>
    <div class="item-block__inner">
      <h4 class="item-block__title">
        {{blockInfo.title}} от {{blockInfo.prise}} грн
      </h4>
      <Button
          class-name="item-block__more-info"
          :text="text"
          @click="goBlock"
      />
    </div>
  </div>
</template>

<script>

import Button from "../UI/Button";
import {useRouter} from "vue-router";
import {scrollUp} from "../utilities/scrollUp";
export default {
  components: {Button},
  props: {
    text: String,
    blockInfo: Object,
  },
  setup(props) {
    const router = useRouter()
    const goBlock = () => {
      scrollUp()
      router.push(`/services/${props.blockInfo.index}`)
    }
    return{
      goBlock
    }
  }
}
</script>

<style scoped>

</style>