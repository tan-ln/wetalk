<template>
  <div class="dialog__box__wrapper" v-if="__target.gname || __target.email">
    <v-header :title="__target.gname || __target.username || __target.email" simple fold />
    <!-- 消息列表 -->
    <main class="wrapper__content" :class="hideScroll ? 'hide_scroll' : ''" ref="mainRef">
      <MsgList :mainHeight="mainHeight" :attachScroll="attachScroll()" />
    </main>
    <!-- 输入框 -->
    <div class="wrapper__footer" v-if="isFriends">
      <!-- textArea 上方工具栏 -->
      <div class="tool__list">
        <i title="emoji" class="iconfont">&#xe610;</i>
        <i title="album" class="iconfont">&#xec7f;</i>
        <i title="files" class="iconfont">&#xe63b;</i>
        <i title="cut" class="iconfont">&#xe676;</i>
        <i title="clipboard" class="iconfont">&#xe645;</i>
      </div>
      <InputArea @handleMsgSend="handleMsgSend" />
    </div>
    <!-- 右侧扩展栏 -->
    <ExtendsBar v-if="showExtends" :__self="__self" :target="__target" :member6="member6" />
    <!-- ID Card -->
    <transition
      enter-active-class="animate__animated animate__fadeIn"
    >
      <IDCard v-if="showIDCard" :userInfo="IDCard" />
    </transition>
  </div>
</template>

<script setup lang="ts">
import VHeader from '../common/VHeader.vue'
import InputArea from './InputArea.vue'
import MsgList from './MsgList.vue'
import ExtendsBar from './ExtendsBar/index.vue'
import IDCard from '@/components/IDCard/index.vue'
import { useAuthStore } from '@/store/auth'
import { ref } from 'vue'
const Auth = useAuthStore()
const __target = Auth.__target
const hideScroll = ref<boolean>(true)
const mainHeight = ref<number>(0)

</script>

<style scoped lang="scss">
.dialog__box__wrapper {
  box-sizing: border-box;
  flex: 1;
  width: 6.06rem;
  height: 6.8rem;
  display: flex;
  flex-direction: column;
  position: relative;

  .wrapper__content {
    flex: 1;
    // width: 6.06rem;
    overflow-y: scroll;
    margin-bottom: 0.14rem;
    padding: 0 .1rem;
    transition: all .5s ease-out;
  }

  .wrapper__footer {
    margin: 0.14rem .1rem;
    // width: 5.86rem;

    .tool__list {
      background-color: #FFF;
      i.iconfont {
        color: #444;
        font-size: 0.16rem;
        display: inline-block;
        width: .28rem;
        cursor: pointer;
      }
    }
  }
  // 动态隐藏滚动条
  .hide_scroll::-webkit-scrollbar-thumb, .hide_scroll::-webkit-scrollbar-track {
    background: none;
  }
}
</style>