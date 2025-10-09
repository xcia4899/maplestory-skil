<template>
  <section id="header">
    <div class="title">
      <h1>MapleStory Skill Simulator</h1>
      <span>楓之谷技能模擬器</span>
    </div>
    
    <div class="chose">
      <h3>請選擇職業</h3>
      <select name="job" id="job">
        <option value="初心者">初心者</option>
        <option value="劍士">劍士</option>
        <option value="法師">法師</option>
        <option value="弓箭手">弓箭手</option>
        <option value="盜賊">盜賊</option>
        <option value="海盜">海盜</option>
      </select>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
#header {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-wrap: wrap;
  gap: 8px;
  background-color: #f5f5f54d;
  //  backdrop-filter: blur(20px);
  @include bgBlur(8px);
  padding: 8px 16px;
  .title {
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-wrap: wrap;
  }
  .chose {
    display: flex;
    gap: 4px;
  }
}
</style>