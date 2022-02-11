<template>
  <textarea
      :class="className"
      class="textarea"
      :value="modelValue"
      :placeholder="placeholder"
      @input="emitChange"
  />
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    modelValue: String,
    className: String,
    placeholder: String
  },
  setup(props,{emit}) {
   const emitChange = (event) => {
     emit('update:modelValue', event.target.value)
   }
   return{
     emitChange
   }
  }
}
</script>
