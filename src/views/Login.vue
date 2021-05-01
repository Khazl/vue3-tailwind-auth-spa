<template>
  <main>
    <div class="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <x-logo></x-logo>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Or
            {{ ' ' }}
            <router-link
                to="/register"
                class="font-medium text-primary-600 hover:text-primary-500"
            >create an account!</router-link
            >
          </p>
        </div>
        <form class="mt-8 space-y-6 px-4 py-6 bg-white rounded-md shadow-xl" action="#" method="POST">
          <x-notification color="error" :message="error"></x-notification>
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required=""
                     class="appearance-none
                     relative
                     block
                     w-full
                     px-3
                     py-3
                     border
                     border-gray-300
                     placeholder-gray-500
                     text-gray-900
                     rounded-t-md
                     focus:outline-none
                     focus:ring-primary-500
                     focus:border-primary-500
                     focus:z-10
                     sm:text-sm"
                     placeholder="Email address" />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required=""
                     class="appearance-none
                     relative
                     block
                     w-full
                     px-3
                     py-3
                     border
                     border-gray-300
                     placeholder-gray-500
                     text-gray-900
                     rounded-b-md
                     focus:outline-none
                     focus:ring-primary-500
                     focus:border-primary-500
                     focus:z-10
                     sm:text-sm"
                     placeholder="Password" />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input v-model="remember" id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
              <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <router-link
                  to="/forgot-password"
                  class="font-medium text-primary-600 hover:text-primary-500"
              >Forgot your password?</router-link>
            </div>
          </div>
          <input type="hidden" name="remember" value="true" />
          <div>
            <x-button icon="LockClosedIcon" @click="login">
              Sign in
            </x-button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent, ref } from 'vue'
import XButton from '@/components/Button.vue'
import XNotification from '@/components/Notification.vue'
import XLogo from '@/components/Logo.vue'
import AuthClient from "@/api/AuthClient"

export default {
  components: {
    XButton,
    XNotification,
    XLogo,
  },
  setup() {
    const email = ref(undefined)
    const password = ref(undefined)
    const remember = ref(false)
    const error = ref(undefined)

    return {
      error,
      email,
      password,
      remember,
    }
  },
  methods: {
    login(event) {
      if (event) {
        event.preventDefault()
      }
      this.error = undefined

      if (!this.isDataGiven()) {
        this.error = "Please fill the form ..."
        return
      }

      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
        remember: this.remember
      }).then(response => {
        console.log(response)
        this.$router.push({ path: '/dashboard' })
      }).catch(error => {
        if (error.response) {
          this.error = error.response.data.message
        } else {
          this.error = "Something went wrong. Please try again ..."
        }
      })
    },
    isDataGiven() {
      return this.email && this.password
    }
  }
}
</script>