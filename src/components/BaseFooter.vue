<template>
  <ul class="footer" @click="navTo" ref="footer">
    <li class="item">
      <router-link to="/">首页</router-link>
    </li>
    <li class="item">
      <router-link to="/shop">商城</router-link>
    </li>
    <li class="item">
      <div class="add-btn" ref="addBtn">
        <img src="../assets/img/icon/add-light.png" class="add" />
      </div>
    </li>
    <li class="item">
      <router-link to="/message">消息</router-link>
      <div class="badge">2</div>
    </li>
    <li class="item">
      <router-link to="/me">我</router-link>
    </li>
  </ul>
</template>

<script setup>
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const footer = ref(null);
const addBtn = ref(null);

watch(
  () => route.path,
  (newVal, oldVal) => {
    if (newVal === '/shop') {
      if (footer.value) {
        footer.value.style.backgroundColor = '#FFF';
        footer.value.style.color = '#000';
      }
      if (addBtn.value) {
        addBtn.value.style.backgroundColor = '#000';
      }
    } else {
      if (footer.value) {
        footer.value.style.backgroundColor = '#000';
        footer.value.style.color = '#FFF';
      }
      if (addBtn.value) {
        addBtn.value.style.backgroundColor = 'transparent';
      }
    }
  }
);
</script>

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
