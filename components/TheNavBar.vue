<template>
<nav class="backdrop-filter backdrop-blur sticky top-0 z-40 w-full">
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
        <div class="mr-2 flex items-center md:hidden">
          <button @click="mobileMenuOpen = true" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          </button>
        </div>
      </div>

    </div>
  </div>
  <transition
    enter-active-class="duration-150 ease-out"
    enter-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="duration-100 ease-in"
    leave-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-show="mobileMenuOpen"
      class=" absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg bg-gray-800">
        <div class="bg-gray-900 rounded-lg overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
          <div class="px-5 pt-4 flex items-center justify-between">
            <div @click="mobileMenuOpen = false">
              <nuxt-link exact :to="localePath('/')">
                <img class="h-8 w-auto" src="../assets/logo.svg" alt="Logo" />
              </nuxt-link>
            </div>
              <div class="-mr-2">
              <button @click="mobileMenuOpen = false" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div @click="mobileMenuOpen = false" class="flex flex-col space-y-1 px-2 pt-2 pb-3">
            <nuxt-link exact :to="localePath('/')" class="flex px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-100 hover:bg-gray-600 focus:outline-none focus:text-gray-100 focus:bg-gray-500 transition duration-150 ease-in-out" role="menuitem">{{ $t('nav.home')}}</nuxt-link>
            <nuxt-link :to="localePath('/blog')" class="flex px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-100 hover:bg-gray-600 focus:outline-none focus:text-gray-100 focus:bg-gray-500 transition duration-150 ease-in-out" role="menuitem">{{ $t('nav.blog')}}</nuxt-link>
            <nuxt-link :to="localePath('/projects')" class="flex px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-100 hover:bg-gray-600 focus:outline-none focus:text-gray-100 focus:bg-gray-500 transition duration-150 ease-in-out" role="menuitem">{{ $t('nav.projects')}}</nuxt-link>
            <nuxt-link :to="localePath('/uses')" class="flex px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-100 hover:bg-gray-600 focus:outline-none focus:text-gray-100 focus:bg-gray-500 transition duration-150 ease-in-out" role="menuitem">{{ $t('nav.uses')}}</nuxt-link>
            <nuxt-link :to="localePath('/resume')" class="flex px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-100 hover:bg-gray-600 focus:outline-none focus:text-gray-100 focus:bg-gray-500 transition duration-150 ease-in-out" role="menuitem">{{ $t('nav.resume')}}</nuxt-link>
          </div>

          <div>
              <a target="_blank" href="https://www.buymeacoffee.com/karngyan" class="block w-full px-5 py-3 text-center font-medium text-gray-200 bg-indigo-700 hover:bg-indigo-600 hover:text-gray-200 focus:outline-none focus:bg-indigo-600 focus:text-gray-100 transition duration-150 ease-in-out">
                🍺 {{ $t('nav.buyMeACoffee') }}
              </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
