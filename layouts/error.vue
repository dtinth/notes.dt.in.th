<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <template v-else>
      <h1>An error occurred</h1>
      <p>This content may not be available.</p>
    </template>
    <NuxtLink to="/">Back to home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog', // you can set a custom layout for the error page
}
</script>