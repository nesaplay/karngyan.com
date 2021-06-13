<template>
  <div>
    <TheNavBar/>
    <Nuxt />
    <TheFooter />
  </div>
</template>

<style>
html {
  @apply bg-gray-800 font-sans;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

::-moz-selection {
    @apply bg-hot-pink text-white;
}
::selection {
    @apply bg-hot-pink text-white;
}
</style>
<script>

export default {
}
</script>
