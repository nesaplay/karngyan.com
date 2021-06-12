<template>
<nav class="backdrop-filter backdrop-blur shadow-sm sticky top-0 z-40 w-full">
  <div class="max-w-7xl border-l border-r border-dashed border-gray-700 mx-auto px-2 sm:px-4 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="flex items-center px-2 lg:px-0">
        <nuxt-link :to="localePath('/')" class="flex-shrink-0">
          <TheLogo class="block h-8 w-auto" />
        </nuxt-link>
        <div class="hidden lg:block lg:ml-6">
          <div class="flex space-x-4">
            <nuxt-link exact :to="localePath('/')" class="active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">{{ $t('nav.home')}}</nuxt-link>
            <nuxt-link :to="localePath('/blog')" class="active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">{{ $t('nav.blog')}}</nuxt-link>
            <nuxt-link :to="localePath('/projects')" class="active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">{{ $t('nav.projects')}}</nuxt-link>
            <nuxt-link :to="localePath('/uses')" class="active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">{{ $t('nav.uses')}}</nuxt-link>
            <nuxt-link :to="localePath('/resume')" class="active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">{{ $t('nav.resume')}}</nuxt-link>
          </div>
        </div>
      </div>
      <div class="flex lg:hidden">
<!--        &lt;!&ndash; Mobile menu button &ndash;&gt;-->
<!--        <button @click="mobileMenuOpen = !mobileMenuOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">-->
<!--          <span class="sr-only">Open main menu</span>-->
<!--          <svg v-show="!mobileMenuOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />-->
<!--          </svg>-->
<!--          <svg v-show="mobileMenuOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />-->
<!--          </svg>-->
<!--        </button>-->
      </div>

    </div>
  </div>

<!--  &lt;!&ndash; Mobile menu, show/hide based on menu state. &ndash;&gt;-->
<!--  <div v-show="mobileMenuOpen" class="lg:hidden" id="mobile-menu">-->
<!--    <div class="px-2 pt-2 pb-3 space-y-1">-->
<!--      &lt;!&ndash; Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" &ndash;&gt;-->
<!--      <nuxt-link exact to="/" class="active-mobile text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</nuxt-link>-->
<!--      <nuxt-link to="/blog" class="active-mobile text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</nuxt-link>-->
<!--      <nuxt-link to="/projects" class="active-mobile text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</nuxt-link>-->
<!--      <nuxt-link to="/uses" class="active-mobile text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Uses</nuxt-link>-->
<!--      <nuxt-link to="/resume" class="active-mobile text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Resume</nuxt-link>-->
<!--    </div>-->
<!--  </div>-->
</nav>

</template>

<script>
import TheLogo from "~/components/logos/TheLogo";
export default {
  name: "TheNavBar",
  components: {TheLogo},
  data() {
    return {
      mobileMenuOpen: false
    }
  }
}
</script>

<style scoped>
.backdrop-filter {
  backdrop-filter: blur(15px);
}

.nuxt-link-active.active {
  @apply bg-gray-900 text-white;
}

.nuxt-link-active.active-mobile {
  @apply bg-gray-900 text-white;
}
</style>
