<template>
  <Section class-name="order-call">
    <Title
        class-name="order-call__title"
        title="Заказать уборку"
    />
    <div class="order-call__content content">
      <Form
          @submit.prevent="sendMessageToGmail"
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
            v-model.trim="state.message"
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
import emailjs from '@emailjs/browser'

export default {
  components: {TextArea},
  setup() {
    const state = reactive({
      name: '',
      phoneNumber: '',
      message: ''
    })
    const sendMessageToGmail = () => {
      const templateParams = {
        name: state.name,
        phoneNumber: state.phoneNumber,
        message: state.message
      };
      emailjs.send('service_dufeb4j', 'template_6ftjru6', templateParams, 'user_PkECrKKCc6WRc2xXl6evf')
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          }, (err) => {
            console.log('FAILED...', err);
          });
      state.name = ''
      state.phoneNumber = ''
      state.message = ''
    }


    return {
      sendMessageToGmail, state
    }
  }
}
</script>

