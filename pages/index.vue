<template>
  <div>
    <HeroSection/>
    <GithubCalendar />
    <Recommendations />
    <RecentBlog :articles="articles"/>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Home - Karn | Friendly Neighborhood Developer',
      meta: [
      ],
    }
  },
  async asyncData({ $content }) {
    const fetchDocsLabel = 'fetchAllArticles'
    console.time(fetchDocsLabel)
    const articles = await $content('articles')
      .without(['body', 'toc', 'dir', 'extension', 'path', 'tags'])
      .limit(3)
      .skip(0)
      .sortBy('createdAt', 'desc')
      .fetch()
    console.timeEnd(fetchDocsLabel)
    return {
      articles
    }
  }
}
</script>

<style>
</style>
