<template>
  <main v-if="user">
    <div class="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Dashboard
          </h2>
        </div>
        <div class="mt-8 space-y-6 px-4 py-6 bg-white rounded-md shadow-xl">
          <div class="text-sm font-medium text-gray-500 p-4">
            Hello {{ user.name }}
          </div>
          <x-button icon="LockClosedIcon" @click="logout">
            Logout
          </x-button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent, ref } from 'vue'
import XButton from '@/components/Button.vue'
import { mapState } from "vuex";

export default {
  components: {
    XButton
  },
  computed: mapState({
    user() {
      return this.$store.state.auth.user;
    },
  }),
  methods: {
    logout() {
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push({ path: '/' })
      });
    },
  }
}
</script>