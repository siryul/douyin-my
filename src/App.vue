<script setup>
import BaseFooter from '@/components/BaseFooter.vue';
</script>

<template>
  <div class="content"></div>
  <BaseFooter />
</template>

<style lang="scss" scoped>
.content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: var(--footer-height);
}
</style>
