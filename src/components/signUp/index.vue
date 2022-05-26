<template>
  <div id="signup__wrapper">
    <Logo />
    <SignUpContent />
  </div>
</template>

<script setup lang="ts">
import Logo from './Logo.vue'
import SignUpContent from './SignUpContent.vue'

</script>

<style lang="scss" scoped>
#signup__wrapper {
  width: 4rem;
  height: 6.8rem;
  background-color: $bg_color;
  border: .01rem solid $border_color;
  padding: .6rem .4rem;
}
</style>
