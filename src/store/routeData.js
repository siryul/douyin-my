import { defineStore } from 'pinia';
import { ref, readonly } from 'vue';

export const useRouteData = defineStore('routeData', () => {
  const _data = ref(null);

  const setData = (data) => {
    _data.value = data;
  };

  return { data: readonly(_data), setData };
});
