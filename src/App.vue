<template>
  <div class="bg-fixed">
    <index />
  </div>
</template>

<script setup lang="ts">
import Index from "./components/index.vue";
</script>

<style scoped lang="scss">

.bg-fixed {
  position: fixed;  /* 讓背景層固定在視窗 */
  inset: 0;         /* 等於 top:0; right:0; bottom:0; left:0; */
  z-index: -1;     
  background: url("@/assets/bg.png") center / cover no-repeat;
}
</style>
