<template>
  <div id="signup__page">
    <SignUp />
    <Swiper />
  </div>
</template>

<script setup lang="ts">
import { onBeforeRouteLeave } from 'vue-router'
import { inject } from 'vue'
import { Socket } from 'socket.io-client'
import SignUp from '@/components/signUp/index.vue'
import Swiper from '@/components/common/Swiper.vue'
import { useAuthStore } from '@/store/auth'

const Auth = useAuthStore()
const socket = inject('socket') as Socket

onBeforeRouteLeave((to, from) => {
  if (to.name === 'chat') {
    const userInfo = Auth.__self
    // this.$store.dispatch('contact/reqRootGroup')
    socket.emit('user:goOnLine', userInfo, from.name)
  }
})

</script>

<style lang="scss" scoped>
#signup__page {
  display: flex;
  flex-direction: row;
}
</style>
