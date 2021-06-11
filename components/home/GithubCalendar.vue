<template>
<div class="calendar"></div>
</template>

<script>
import GitHubCalendar from 'github-calendar'

export default {
  mounted() {
    GitHubCalendar(".calendar", "karngyan", { responsive: true });
  }
}
</script>

<style scoped>

</style>
