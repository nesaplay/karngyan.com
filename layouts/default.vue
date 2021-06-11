<template>
  <div>
    <TheNavBar/>
    <Nuxt />
  </div>
</template>

<style>
html {
  @apply bg-gray-800 font-sans;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
<script>
import TheNavBar from "~/components/TheNavBar";

export default {
  components: {TheNavBar}
}
</script>
