<template>
  <div class="relative max-w-7xl border-r border-l border-dashed border-gray-700 py-6 mx-auto">
    <div data-aos="fade-up" class="text-center">
      <h2 class="text-2xl tracking-tight font-extrabold text-gray-200">
        {{ $t('blog.header') }}
      </h2>
      <p class="mt-2 px-2 max-w-2xl mx-auto text-sm leading-7 text-gray-400">
        {{ $t('blog.subtext') }}
      </p>
    </div>
    <div data-aos="zoom-in" class="mt-5 gap-4 mx-4 grid divide-y divide-gray-700 divide-dashed max-w-none lg:grid-cols-3">
      <BlogCard v-for="article in articles" :key="article.slug" :article="article" />
    </div>
  </div>
</template>

<script>
import BlogCard from "~/components/blog/BlogCard";
export default {
  components: {BlogCard},
  head() {
    return {
      title: 'Blog -- Karn | Friendly Neighborhood Developer'
    }
  },
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .sortBy('createdAt', 'desc')
      .fetch()

    console.debug(articles)
    return {
      articles
    }
  }
}
</script>

<style scoped>

</style>
