<template>
  <a>
    <template v-if="linkInfo">
      <span class="smart-link">{{ linkInfo.title }}</span>
    </template>
    <template v-else>
      <slot />
    </template>
  </a>
</template>

<script>
export default {
  name: 'NotesLink',
  inject: ['frontmatter'],
  computed: {
    linkInfo() {
      if (!this.$attrs['data-autolink']) return null
      if (!this.frontmatter) return null
      const info = this.frontmatter.link_info
      if (!info) return null
      const thisLinkInfo = info[this.$attrs.href]
      if (!thisLinkInfo) return null
      return thisLinkInfo
    },
  },
}
</script>

<style scoped>
.smart-link {
  padding: 2px 4px;
  border: 1px solid #555453;
  box-shadow: 0 1px 0 #252423;
  border-radius: 2px;
  border-bottom-width: 2px;
  background: #252423;
}
</style>