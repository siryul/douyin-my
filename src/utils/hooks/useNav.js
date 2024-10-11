import { useRouter } from 'vue-router';
import { useRouteData } from '@/store/routeData';

export const useNav = () => {
  const router = useRouter();
  const routeData = useRouteData();

  return (path, query = {}, data = null) => {
    routeData.setData(data);
    router.push({ path, query });
  };
};
