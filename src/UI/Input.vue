<template>
  <input
      type="text"
      class="input"
      :class="className"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emitChange"
  >
</template>

<script>
export default {
  name: 'Input',
  props: {
    modelValue: String,
    className: String,
    placeholder: String
  },
  setup(props, {emit}) {
    const emitChange = (event) => {
      emit('update:modelValue', event.target.value)
    }

    return{
      emitChange
    }
  }
}
</script>
