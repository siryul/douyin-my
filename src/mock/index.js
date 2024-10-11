import request from '@/utils/request';
import MockAdapter from 'axios-mock-adapter';
import config from '../config';

const mock = new MockAdapter(request);

mock.onGet('/shop/recommended').reply(async () => {
  const res = await fetch(config.baseUrl + '/data/goods.json');
  let data = await res.json();
  data = data.map((item) => ({
    ...item,
    cover: config.baseUrl + '/images/goods/' + item.cover,
  }));

  return [200, { code: 200, success: true, data }];
});
