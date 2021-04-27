<template>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('auth/checkAuth');
  }
}
</script>
