<template>
  <div id="swiper__container">
    <div class="swiper__list">
      <div
        class="swiper__list__item"
        v-for="(item, index) in dataList"
        :key="index + 'swiper'"
      >
        <transition
          name="slide"
          :enter-active-class="'animate__animated animate__slideInRight'"
          :leave-active-class="'animate__animated animate__fadeOut animate__slower'"
        >
          <!-- <img v-if="index === curIndex" :src="require('../assets/images/swiper/' + item)" /> -->
          <img v-if="index === curIndex" :src="getImgUrl" />
        </transition>
      </div>
    </div>
    <!-- 翻页按钮 -->
    <div class="swiper__flips" v-if="dataList.length > 0">
      <i v-for="(item, index) in dataList" :key="index + '_flip'" @click="gotoPage(index)" :class="{ 'current' : curIndex == index }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
const dataList = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg'
]
let timer: number
const curIndex = ref(0)
const duration = 5000

const gotoPage = (index: number) => {
  curIndex.value = index
}

onMounted(() => {
  timer = window.setInterval(() => {
    gotoPage(
      curIndex.value === dataList.length - 1 ? 0 : (curIndex.value + 1)
    )
  }, duration)
})
onBeforeUnmount(() => {
  clearInterval(timer)
})

const getImgUrl = computed(() => {
  return new URL('../../assets/images/bg/ddd.png', import.meta.url).href
})

</script>

<style lang="scss" scoped>
#swiper__container {
  width: 5.58rem;
  height: 6.8rem;
  position: relative;
  .swiper__list {
    &__item {
      position: absolute;
    }
    img {
      width: 5.58rem;
      height: 6.8rem;
      display: block;
      background-size: cover;
      object-fit: cover;
    }
  }
  .swiper__flips {
    position: absolute;
    width: 5.58rem;
    right: 0;
    bottom: 20%;
    text-align: center;
    i {
      display: inline-block;
      width: .06rem;
      height: .06rem;
      background-color: $border_middle_color;
      border-radius: 50%;
      margin: 0 .1rem;
      cursor: pointer;
    }
    i.current {
      background-color: $url_font_color;
    }
  }
}
</style>
