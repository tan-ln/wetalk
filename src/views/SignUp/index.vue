<template>
  <div id="signup__page">
    <SignUp />
    <Swiper />
  </div>
</template>

<script setup lang="ts">
import SignUp from '@/components/signUp/index.vue'
import Swiper from '@/components/common/Swiper.vue'

</script>

<style lang="scss" scoped>
#signup__page {
  display: flex;
  flex-direction: row;
}
</style>
