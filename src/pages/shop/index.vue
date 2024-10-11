<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { recommendedShop } from '@/api/user';
import Waterfall from '@/components/Waterfall.vue';
import { useNav } from '@/utils/hooks/useNav';

const nav = useNav();

const goods = ref([]);

recommendedShop().then((res) => {
  if (res.success) {
    // console.log('goods', res.data);
    goods.value = res.data;
  }
});

const routeToDetail = (item) => {
  nav('/shop/detail', {}, item);
};
</script>
<template>
  <div class="shop">
    <div class="wrapper">
      <div class="search">
        <Icon color="gray" icon="tabler:search" />
        <input class="search-input" type="text" placeholder="50元话费充值" />
        <Icon color="gray" icon="lucide:camera" />
        <button class="search-btn">搜索</button>
      </div>
      <div class="cart">
        <Icon icon="ion:cart-sharp" />
      </div>
    </div>
    <div class="content">
      <div class="top-card">
        <ul class="card">
          <li class="option">
            <Icon icon="lets-icons:order-light" />
            <div class="text">我的订单</div>
          </li>
          <li class="option">
            <Icon icon="material-symbols-light:charging-station-outline" />
            <div class="text">手机充值</div>
          </li>
          <li class="option">
            <Icon icon="system-uicons:message" />
            <div class="text">购物消息</div>
          </li>
          <li class="option">
            <Icon icon="fluent:location-16-regular" />
            <div class="text">小时达</div>
          </li>
          <li class="option">
            <Icon icon="dashicons:money-alt" />
            <div class="text">退款/售后</div>
          </li>
          <li class="option">
            <Icon icon="icon-park-outline:clothes-turtleneck" />
            <div class="text">潮流服饰</div>
          </li>
        </ul>
        <div class="card">
          <div class="baiyibutie">
            <div class="item">
              <img src="@/assets/img/icon/shop/baiyibutie.png" alt="" />
              <span>38节补贴</span>
            </div>
            <div class="item">
              <img src="@/assets/img/icon/shop/1.webp" alt="" />
              <span class="price">
                <span class="m">￥</span>
                <span>470</span>
              </span>
            </div>
            <div class="item">
              <img src="@/assets/img/icon/shop/2.webp" alt="" />
              <span class="price">
                <span class="m">￥</span>
                <span>699</span>
              </span>
            </div>
            <div class="item">
              <img src="@/assets/img/icon/shop/3.png" alt="" />
              <span class="price">
                <span class="m">￥</span>
                <span>8.8</span>
              </span>
            </div>
            <div class="item">
              <img src="@/assets/img/icon/shop/4.jpg" alt="" />
              <span class="price">
                <span class="m">￥</span>
                <span>2.99</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Waterfall :list="goods" v-slot="{ item }">
        <div class="goods-item" @click="routeToDetail(item)">
          <img :src="item.cover" class="cover" />
          <div class="desc">
            <div class="name">{{ item.name }}</div>
            <span class="discount" v-if="item.discount">
              {{ item.discount }}
            </span>
            <div class="price_container">
              <span class="m">￥</span>
              <span class="price">{{ item.price }}</span>
              <span class="sold">已售{{ item.sold }}件</span>
            </div>
            <div class="low-price" v-if="item.isLowPrice">近期最低价</div>
          </div>
        </div>
      </Waterfall>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';

.shop {
  padding: 10rem;
  background-color: #f7f7f7;
  color: #000;

  .wrapper {
    display: flex;
    height: 56rem;
    align-items: center;
    font-size: 20rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: rgba(247, 247, 247, 0.5);
    backdrop-filter: blur(50rem);
    padding: 10rem;
  }
}

.search {
  border: 2rem solid var(--primary-btn-color);
  flex: 1;
  margin-right: 10rem;
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 10rem;
  padding-right: 4rem;
  border-radius: 18rem;

  .search-input {
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    margin: 0 8rem;
    background-color: transparent;
    &::placeholder {
      color: #000;
    }
  }

  .search-btn {
    margin-left: 8rem;
    height: 80%;
    border: none;
    outline: none;
    background-color: var(--primary-btn-color);
    color: #fff;
    padding: 0 10rem;
    border-radius: 18rem;
  }
}

.cart {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  padding-top: 24rem;
}

.card {
  width: 100%;
  background-color: #fff;
  margin: 10rem 0;
  border-radius: 10rem;
  display: flex;
  overflow: hidden;
  padding: 10rem 16rem;
  font-size: 30rem;
  gap: 20rem;
  overflow-x: auto;

  .option {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .text {
    font-size: 13rem;
    margin-top: 3rem;
    white-space: nowrap;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}

.baiyibutie {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  overflow-x: auto;

  .item {
    @include flex-position;
    flex-direction: column;
    font-size: 12rem;
    color: var(--second-text-color);
  }

  .m {
    font-size: 12rem;
  }

  .price {
    font-size: 16rem;
    color: var(--primary-btn-color);
  }

  img {
    width: 52rem;
    height: 52rem;
  }
}

.goods-item {
  margin-bottom: 10rem;
  background-color: #fff;
  border-radius: 10rem;
  overflow: hidden;
}

.cover {
  width: 100%;
  // outline: 1px solid #000;
}

.desc {
  padding: 10rem;

  .name {
    @include text-ellispis(2);
  }
  .discount {
    $color: #b05560;
    color: $color;
    font-size: 10rem;
    border: 1px solid $color;
    padding: 2rem;
    margin-top: 5rem;
    display: inline-block;
  }

  .price_container {
    margin: 5rem 0;
    color: var(--primary-btn-color);
    font-size: 10rem;

    .price {
      font-size: 18rem;
      margin-right: 4rem;
      font-weight: 500;
    }

    .sold {
      color: var(--second-text-color);
    }
  }

  .low-price {
    font-size: 12rem;
    color: #d89b69;
  }
}
</style>
