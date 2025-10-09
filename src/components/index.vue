<template>
  <section id="header">
    <h1>MapleStory Skill Simulator</h1>
    <h2>楓之谷技能模擬器</h2>
    <div>
      <p>請選擇職業</p>
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

  <section id="content"></section>

  <section id="footer">
    <h2>MapleStory Skill Simulator</h2>
    <h3>楓之谷技能模擬器</h3>
    <p>作者：<a href="" target="blank">Jax</a></p>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
*{
    border: 1px solid;
  }
#header {
  display: flex;
  justify-content: space-around;
  align-content: center;

  background-color: #f5f5f54d;
  //  backdrop-filter: blur(20px);
  @include bgBlur(8px);
  padding: 16px;
  
}

#footer {
  position: fixed;
  background-color: #f5f5f54d;
  // backdrop-filter: blur(20px);
  @include bgBlur(8px);
  inset: auto 0 0px 0;
  padding: 16px;
  text-align: center;
}
</style>
