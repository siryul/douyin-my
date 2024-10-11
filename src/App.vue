<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import BaseFooter from '@/components/BaseFooter.vue';

const showFooterList = ['Home', 'Shop', 'Message', 'Me'];

const route = useRoute();

const showFooter = computed(() => {
  return showFooterList.includes(route.name);
});
</script>

<template>
  <router-view
    class="content"
    v-slot="{ Component }"
    :style="{ bottom: showFooter ? 'var(--footer-height)' : '0' }"
  >
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <BaseFooter v-if="showFooter" />
</template>

<style lang="scss" scoped>
.content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: var(--footer-height);
  overflow: hidden auto;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
