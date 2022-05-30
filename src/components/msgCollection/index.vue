<template>
  <div class="msg_collection__wrapper">
    <v-header title="Messages" bubble input />
    <div class="warpper__content">
      <!-- <template v-for="(item) in getLastMsgQueue" :key="item.id" >
        <MsgEntry :entry="addInfo(item)" @click.native="handleClickMsgEntry(item.msg)" :target="__target" :rootGroup="rootGroup" />
      </template> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import VHeader from '../common/VHeader.vue'

// const addInfo = (item: any) => {
//   console.log(item)
// }
// const handleClickMsgEntry = () => {}

</script>

<style scoped>

</style>
