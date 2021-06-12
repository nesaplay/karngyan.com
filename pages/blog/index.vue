<template>
  <div class="relative max-w-7xl border-r border-l border-dashed border-gray-700 py-6 mx-auto">
    <div class="text-center">
      <h2 class="text-2xl tracking-tight font-extrabold text-gray-200">
        {{ $t('blog.header') }}
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-sm leading-7 text-gray-400">
        {{ $t('blog.subtext') }}
      </p>
    </div>
    <div class="mt-5 mx-4 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
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
      .sortBy('createdAt', 'asc')
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
