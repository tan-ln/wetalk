<template>
  <!-- vue-router 4 写法 -->
  <!-- signin / signup -->
  <router-view v-slot="{ Component }" class="root__page" name="default">
    <!-- 侧边导航 -->
    <keep-alive>
      <component :is="NavBar" v-if="Auth.__self.email && route.name !== 'signin' && route.name !== 'signup'" />
    </keep-alive>
    <!-- <transition enter-active-class="animate__animated animate__fadeIn" mode="out-in"> -->
      <component :is="Component" />
    <!-- </transition> -->
  </router-view>

  <!-- pages request signin -->
  <Frame class="root__page" v-if="Auth.__self.email && route.name !== 'signin' && route.name !== 'signup'" />

  <!-- modal 弹窗 -->
  <Modal v-if="Helper.modal.show" />
</template>

<script setup lang="ts">
import Modal from '@/components/modal/Modal.vue'
import NavBar from '@/components/navbar/NavBar.vue'
import Frame from '@/views/Frame.vue'
import { useHelperStore } from '@/store/helper'
import { useAuthStore } from '@/store/auth'
import { useRoute } from 'vue-router'
const Helper = useHelperStore()
const Auth = useAuthStore()
const route = useRoute()

</script>

<style lang="scss">
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
