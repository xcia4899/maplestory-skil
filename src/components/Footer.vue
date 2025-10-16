<template>
  <section id="footer">
    <h4>MapleStory Skill Simulator</h4>
    <h4>楓之谷技能模擬器</h4>
    <p>作者：<a  target="blank">XXXX</a></p>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#footer {
  //   width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  gap: 16px;
  background-color: #ffffff4d;
  // backdrop-filter: blur(20px);
  @include bgBlur(8px);
  inset: auto 0 0px 0;
  padding: 8px 16px;
  text-align: center;
}
</style>
