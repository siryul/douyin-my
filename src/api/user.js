import request from '@/utils/request';

export function recommendedShop(params, data) {
  return request({ url: '/shop/recommended', method: 'get', params, data });
}
