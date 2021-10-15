<template>
  <div class="d-split">
    <div class="d-split-left">
      <slot />
    </div>
    <div class="d-split-right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@media (min-width: 840px) {
  .d-split {
    display: flex;
    gap: 2rem;
  }
  .d-split-left {
    flex: auto;
  }
  .d-split-right {
    flex: none;
    width: 400px;
    min-width: 45%;
  }
}
</style>