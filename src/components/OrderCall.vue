<template>
  <Section class-name="order-call">
    <Title
        class-name="order-call__title"
        title="Заказать уборку"
    />
    <div class="order-call__content content">
      <Form
          @submit.prevent="sendData"
          class-name="content__form form"
      >
        <div class="form__inner">
          <Input
              class-name="form__name"
              placeholder="Имя"
              v-model.trim="state.name"
          />
          <Input
              class-name="form__tel"
              placeholder="Номер телефона"
              v-model.trim="state.phoneNumber"
          />
        </div>
        <TextArea
            class-name="form__more-info"
            v-model.trim="state.areaInfo"
            placeholder="Добавьте больше информании (если нужно)"
        />
        <Button
            class-name="form__push-info"
            text="Отправить"
        />
      </Form>
    </div>
  </Section>
</template>

<script>

import {reactive} from "vue";
import TextArea from "../UI/TextArea";

export default {
  components: {TextArea},
  setup() {
    const state = reactive({
      name: '',
      phoneNumber: '',
      areaInfo: ''
    })

    const sendData = () => {
      console.log('click')
    }

    return {
      sendData, state
    }
  }
}
</script>

