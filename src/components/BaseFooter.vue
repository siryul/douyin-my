<template>
  <ul class="footer">
    <li class="item">首页</li>
    <li class="item">商城</li>
    <li class="item">
      <div class="add-btn">
        <img src="../assets/img/icon/add-light.png" class="add" />
      </div>
    </li>
    <li class="item">
      消息
      <div class="badge">2</div>
    </li>
    <li class="item">我</li>
  </ul>
</template>
<script setup></script>
<style lang="scss" scoped>
@import '../styles/mixins.scss';

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: var(--footer-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20rem;
  font-size: 14rem;
  background-color: var(--footer-color);
  .item {
    flex: 1;
    text-align: center;
    height: 100%;
    line-height: var(--footer-height);
    font-size: 16rem;
    position: relative;
  }

  .add-btn {
    width: 40rem;
    height: 26rem;
    outline: 2.5rem solid #fff;
    border-radius: 4rem;
    @include self-center;
    @include flex-position;

    .add {
      width: 20rem;
      height: 20rem;
    }
  }
}

.badge {
  position: absolute;
  top: 12rem;
  right: 12rem;
  width: 16rem;
  height: 16rem;
  background-color: red;
  border-radius: 50%;
  @include flex-position;
  font-size: 12rem;
}
</style>
