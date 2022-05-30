<template>
  <div class="wrapper__header">
    <div class="wrapper__header--left">
      <h2 class="wrapper__header--title" :class="simple !== undefined ? 'simpleStyle' : ''">{{title}}</h2>
      <div class="wrapper__header--icon" v-if="bubble !== undefined">
        <Bubble num="99+" />
      </div>
    </div>
    <div class="wrapper__header--right" v-if="input !== undefined">
      <div class="search__input" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <input
          :class="['search__input__content', inputClassName]"
          type="search" v-model="keywords" />
        <i class="opts__icon iconfont" v-html="keywords ? '&#xe60f;' : '&#xe782;'" @click="handleClickClean"></i>
      </div>
    </div>
    <div class="wrapper__header--right tool__btns" v-if="fold !== undefined && __target.gname" title="open details" @click="handleClickExtends">
      <i class="iconfont tool__btns--more">&#xe613;</i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Bubble from './Bubble.vue'
import { useAuthStore } from '@/store/auth'
const Auth = useAuthStore()
const inputClassName = ref<string>('short-input')
const keywords = ref<string>('')
defineProps(['title', 'bubble', 'input', 'simple', 'fold'])

type TTargetGroup = {
  gid: string,
  gname: string,
  gavatar: string,
  gmember?: string,
  timestamp: string,
}
const __target = Auth.__target as TTargetGroup

const mouseOver = () => {
  inputClassName.value = 'short-input'
  // inputClassName.value = 'full-input'
}
const mouseLeave = () => {
  inputClassName.value = 'short-input'
}
const handleClickClean = () => {
  keywords.value = ''
}
const handleClickExtends = () => {
  // this.$store.commit('contact/showExtends', !this.$store.state.contact.showExtends)
}

</script>

<style lang="scss" scoped>
.wrapper__header {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  height: .5rem;
  margin: 0.14rem .1rem;
  position: relative;
  &--left {
    position: relative;
  }
  &--title {
    font-size: 0.18rem;
    margin-right: .04rem;
    color: #333;
    font-weight: 600;
  }
  &--title.simpleStyle {
    font-weight: 400;
    font-size: 0.16rem;
  }
  &--icon {
    position: absolute;
    right: .04rem;
    top: 0;
  }
  &--right {
    position: absolute;
    right: 0;

    .search__input {
      line-height: 0.28rem;
      background-color: $border_color;
      border-radius: 2rem;
      input {
        // width: .3rem;
        height: 0.28rem;
        padding: 0.02rem .2rem .02rem .1rem;
        border: .01rem solid $border_color;
        border-radius: 2rem;
        transition: .3s ease-in-out;
        font-size: 0.12rem;
      }
      .opts__icon {
        font-size: 0.12rem;
        color: $light_font_color;
        position: absolute;
        right: .1rem;
        top: 0;
      }
    }
  }
  &::after {
    content: "";
    width: 100%;
    position: absolute;
    bottom: -.06rem ;
    border-bottom: .01rem solid $border_color;
  }
  .tool__btns {
    cursor: pointer;
    color: $heavy_font_color;
    position: absolute;
    bottom: -.04rem;
    &--more {
      font-size: .18rem;
    }
  }
}
.full-input {
  // width: 2.24rem;
}
.short-input {
  width: .28rem;
}
</style>
