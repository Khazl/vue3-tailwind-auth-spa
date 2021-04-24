<template>
  <button
      :type="type"
      :class="`group relative w-full flex justify-center
      py-3 px-4 border border-transparent text-sm
      font-medium rounded-md text-white bg-${color}-600 hover:bg-${color}-700
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`"
  >
    <span
        class="absolute left-0 inset-y-0 flex items-center pl-3"
    >
      <component
          :is="icon"
          :class="`h-5 w-5 text-${color}-500 group-hover:text-${color}-400`"
          aria-hidden="true"
      />
    </span>
    <slot></slot>
  </button>
</template>

<script>
import { LockClosedIcon, MailOpenIcon, CheckIcon } from '@heroicons/vue/solid'

export default {
  props: {
    icon: {
      default: undefined,
      validator: value => {
        return ['LockClosedIcon', 'MailOpenIcon', 'CheckIcon'].indexOf(value) !== -1
      }
    },
    color: {
      default: 'primary'
    },
    type: {
      default: 'submit'
    }
  },
  components: {
    LockClosedIcon,
    MailOpenIcon,
    CheckIcon
  },
  setup() {

  }
}
</script>