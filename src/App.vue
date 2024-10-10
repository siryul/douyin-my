<script setup>
import BaseFooter from '@/components/BaseFooter.vue';
</script>

<template>
  <router-view class="content" v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <BaseFooter />
</template>

<style lang="scss" scoped>
.content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: var(--footer-height);
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
