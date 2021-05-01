<template>
  <main>
    <div class="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <x-logo></x-logo>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create an account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Or
            {{ ' ' }}
            <router-link
                to="/login"
                class="font-medium text-primary-600 hover:text-primary-500"
            >login to your existing account!</router-link
            >
          </p>
        </div>
        <form class="mt-8 space-y-6 px-4 py-6 bg-white rounded-md shadow-xl" action="#" method="POST">
          <x-notification color="error" :message="error"></x-notification>
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="username" class="sr-only">Username</label>
              <input v-model="username" id="username" name="username" type="text" required="" class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" placeholder="Username" />
            </div>
          </div>

          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
          </div>

          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="password" class="sr-only">Password</label>
              <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
            <div>
              <label for="password_confirmation" class="sr-only">Password Confirmation</label>
              <input v-model="password_confirmation" id="password_confirmation" name="password_confirmation" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" placeholder="Password Confirmation" />
            </div>
          </div>

          <div>
            <x-button icon="LockClosedIcon" @click="register">
              Create
            </x-button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import {defineComponent, ref} from 'vue'
import XButton from '@/components/Button.vue'
import XLogo from '@/components/Logo.vue'
import XNotification from '@/components/Notification.vue'
import AuthClient from "@/api/AuthClient"

export default {
  components: {
    XButton,
    XNotification,
    XLogo,
  },
  setup() {
    const username = ref(undefined)
    const email = ref(undefined)
    const password = ref(undefined)
    const password_confirmation = ref(undefined)
    const error = ref(undefined)

    return {
      username,
      email,
      password,
      password_confirmation,
      error,
    }
  },
  methods: {
    async register(event) {
      if (event) {
        event.preventDefault()
      }
      this.error = undefined

      if (!this.isDataGiven()) {
        this.error = "Please fill the form ..."
        return
      }

      await AuthClient.setCsrf()
      AuthClient.register(this.username, this.email, this.password, this.password_confirmation).then(response => {
        if (response.status === 201) {
          this.$store.dispatch('auth/checkAuth').then(() => {
            this.$router.push({ path: '/dashboard' })
          });
        }
      }).catch(error => {
        if (error.response) {
          this.error = error.response.data.message
        } else {
          this.error = "Something went wrong. Please try again ..."
        }
      })
    },
    isDataGiven() {
      return this.email && this.username && this.password && this.password_confirmation
    },
  }
}
</script>