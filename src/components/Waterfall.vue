<template>
  <div class="waterfall">
    <div class="left">
      <slot v-for="item in leftList" :item="item" />
    </div>
    <div class="right">
      <slot v-for="item in rightList" :item="item" />
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
});

const leftList = computed(() => {
  return props.list.filter((_, index) => index % 2 === 0);
});

const rightList = computed(() => {
  return props.list.filter((_, index) => index % 2 === 1);
});
</script>

<style lang="scss" scoped>
.waterfall {
  width: 100%;
  display: flex;
  gap: 10rem;
}
</style>
