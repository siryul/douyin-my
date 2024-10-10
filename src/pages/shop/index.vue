<script setup>
import { Icon } from '@iconify/vue';
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
    left: 10rem;
    right: 10rem;
    z-index: 2;
    background-color: #f7f7f7;
    padding: 10rem 0;
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
  gap: 16rem;
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
</style>
