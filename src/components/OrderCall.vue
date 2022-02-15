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
        <p
            class="error"
            v-if="state.errorInfo.status"
        >{{ state.errorInfo.description }}</p>
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

import {reactive, computed, watchEffect} from "vue";
import TextArea from "../UI/TextArea";
import {useVuelidate} from '@vuelidate/core'
import {minLength, required} from '@vuelidate/validators'
import emailjs from '@emailjs/browser'

export default {
  components: {TextArea},
  setup() {
    const state = reactive({
      name: '',
      phoneNumber: '',
      message: '',
      errorInfo: {
        status: false,
        description: 'Вы допустили где-то ошибку!',
        error: {
          name: false,
          phoneNumber: false
        }
      }
    })
    const rules = computed(() => ({
      name: {
        required
      },
      phoneNumber: {
        required,
        minLength: minLength(9)
      }
    }))

    const v$ = useVuelidate(rules, state)

    console.log(v$)

    const sendMessageToGmail = () => {
      if (!v$.value.$invalid) {
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
        state.errorInfo.status = false
        state.errorInfo.error.phoneNumber = false
        state.errorInfo.error.name = false
      } else {
        v$.value.$silentErrors.forEach(error => {
          switch (error.$property) {
            case 'name':
              state.errorInfo.error.name = true
              break
            case 'phoneNumber':
              state.errorInfo.error.phoneNumber = true
              break
            default:
              state.errorInfo.error.name = error.$property === 'name'
              state.errorInfo.error.phoneNumber = error.$property === 'phoneNumber'
              break
          }
        })
        state.errorInfo.status = true
      }
    }

    // watchEffect(() => {
    //   if (state.errorInfo.status) {
    //     v$.value.$silentErrors.reduce((accum, error, index, arr) => {
    //       accum.push(error.$property)
    //       console.log(accum)
    //       console.log(!accum.includes('name'))
    //       if (++index === arr.length) {
    //         switch (error.$property) {
    //           case 'name':
    //             state.errorInfo.error.name = true
    //             if (!accum.includes('phoneNumber')) {
    //               state.errorInfo.error.phoneNumber = false
    //             }
    //             break
    //           case 'phoneNumber':
    //             state.errorInfo.error.phoneNumber = true
    //               if (!accum.includes('name')) {
    //                 state.errorInfo.error.name = false
    //               }
    //             break
    //           default:
    //             console.log('default')
    //             state.errorInfo.error[error.$property] = false
    //             break
    //         }
    //         // if (!accum.includes('name') || !accum.includes('phoneNumber')) {
    //         //   console.log('name was include')
    //         //   state.errorInfo.error[error.$property] = true
    //         // }
    //         // else {
    //         //   console.log(error.$property)
    //         // }
    //
    //       }
    //       return accum
    //     }, [])
    //   }
    // })


    return {
      sendMessageToGmail, state, v$
    }
  }
}
</script>

