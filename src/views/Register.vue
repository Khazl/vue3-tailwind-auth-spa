<template>
  <main>
    <div class="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
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
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="username" class="sr-only">Username</label>
              <input id="username" name="username" type="email" autocomplete="email" required="" class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" placeholder="Username" />
            </div>
          </div>

          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
          </div>

          <input type="hidden" name="sell_data" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
            <div>
              <label for="password_confirmation" class="sr-only">Password Confirmation</label>
              <input id="password_confirmation" name="password_confirmation" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" placeholder="Password Confirmation" />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="sell_data" name="sell_data" type="checkbox" class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
              <label for="sell_data" class="ml-2 block text-sm text-gray-900">
                Sell all my data!
              </label>
            </div>
          </div>

          <div>
            <x-button icon="LockClosedIcon" @click="">
              Create
            </x-button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import { LockClosedIcon } from '@heroicons/vue/solid'
import XButton from '@/components/Button.vue'

export default {
  components: {
    LockClosedIcon,
    XButton
  },
}
</script>