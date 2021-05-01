<template>
  <p v-if="message"
     :class="`py-2 px-3 border mb-3 bg-${color}-100 border-${color}-700
     text-${color}-900 text-xs rounded-md`"
  >{{ message }}</p>
</template>

<script>
export default {
  props: {
    color: {
      default: 'error'
    },
    message: {
      required: true
    },
  },
}
</script>