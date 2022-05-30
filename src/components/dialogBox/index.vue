<template>
  <div class="dialog__box__wrapper">
    dialog__box__wrapper
  </div>
</template>

<script setup lang="ts">
// import VHeader from '../common/VHeader.vue'
// import InputArea from './InputArea.vue'
// import MsgList from './MsgList.vue'
// import ExtendsBar from './ExtendsBar/index.vue'
// import IDCard from '@/components/IDCard/index.vue'
// import { useAuthStore } from '@/store/auth'
// import { ref } from 'vue'
// const Auth = useAuthStore()
// const __target = Auth.__target
// const hideScroll = ref<boolean>(true)
// const mainHeight = ref<number>(0)

</script>

<style scoped lang="scss">
.dialog__box__wrapper {
  background-color: #fff;
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
