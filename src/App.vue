<template>
  <!-- vue-router 4 写法 -->
  <router-view v-slot="{ Component }" class="root__page">
    <transition
      enter-active-class="animate__animated animate__fadeIn"
    >
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- modal 弹窗 -->
  <Modal v-if="other.modal.show" />
</template>

<script setup lang="ts">
import Modal from '@/components/modal/Modal.vue'
import { useOtherStore } from '@/store/index'
const other = useOtherStore()

</script>

<style lang="scss">
/*将公用的样式统一在此导入*/
@import "./assets/styles/base.css";
@import "./assets/styles/common.scss";

.root__page {
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  width: 9.58rem;
  height: 6.8rem;
  position: relative;
  border-radius: .12rem;
  box-shadow: 0 .03rem .01rem -.2rem rgba(0,0,0,.2), 0 .06rem .2rem .02rem rgba(0,0,0,.14), 0 .06rem .06rem 0 rgba(0,0,0,.12);
  border-width: thin;
  z-index: 9;
  transition: all .25s;
}
</style>
