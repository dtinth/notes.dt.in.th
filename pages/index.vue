<template>
  <div>
    <strong>
      This is <a href="https://dt.in.th">@dtinth</a>'s notes server.
    </strong>
    Various kinds of notes will be published here. Unfortunately, there is no
    index page right now. Meanwhile, check out
    <a href="https://dt.in.th">the main website</a>.
  </div>
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

