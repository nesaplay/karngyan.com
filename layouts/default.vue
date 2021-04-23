<template>
  <div>
    <TheNavBar/>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Poppins',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  @apply bg-gray-800;
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
