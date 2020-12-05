<template>
  <div>hello world</div>
</template>

<script>
export default {
  async asyncData({ res }) {
    if (process.server) {
      res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
    }
    return {}
  },
}
</script>

