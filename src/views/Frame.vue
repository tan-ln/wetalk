<template>
  <div class="frame__wrapper">
    <div class="frame__wrapper--sub">
      <!-- 可拉伸 -->
      <div class="frame-resizable"></div>
      <router-view name="sub" class="sub__content"></router-view>
    </div>
    <router-view name="main" class="frame__wrapper--main"></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted, inject } from 'vue'
import { Socket } from 'socket.io-client'
import { useContactStore } from '@/store/contact'
import { useChatStore } from '@/store/chat'
const Contacts = useContactStore()
const Chat = useChatStore()

const socket = inject('socket') as Socket
socket.on('__broadcast', (data) => {
  if (data.type === 'signin' || data.type === 'signup') {
    // 登录成功，获取 root group
    Contacts.reqRootGroup()
  }
  Chat.setConversations(data)
})

onMounted(() => {
  socket.connect()
})
</script>

<style scoped lang="scss">
.frame__wrapper {
  background-color: $bg_color;
  padding-left: .78rem;
  &--sub {
    position: relative;
    /* 脱离文档流 */
    float: left;
    .frame-resizable {
      width: 2.42rem;
      height: 6.8rem;
      overflow: scroll;
      resize: horizontal;
      cursor: ew-resize;
      opacity: 0;
      min-width: 2rem;
      max-width: calc(8.8rem - 5rem);
    }
    /* 更改拖拽图标的大小和父容器一样大 */
    .frame-resizable::-webkit-scrollbar {
      width: 1rem;
      height: 6.8rem;
    }
    .sub__content {
      margin: 0;
      height: 6.8rem;
      position: absolute;
      top: 0;
      /* 留出5px为了鼠标放上去可以显示拖拽 */
      right: 2px;
      bottom: 0;
      left: 0;
    }
  }
  &--main {
    flex: 1;
    min-width: 5rem;
  }
}
</style>
