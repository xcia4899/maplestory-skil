<template>
  <section id="content">
    <div class="skilCard">
      <div class="header">技能欄</div>
      <div class="content">
        <div class="">
          轉職
          <a href="">初心者</a>
          <a href="">一轉</a>
          <a href="">二轉</a>
          <a href="">三轉</a>
          <a href="">四轉</a>
        </div>
        <div>冒險技能</div>
        <div>技能頁面</div>
      </div>
      <div class="footer">技能點數<span>3</span></div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#content {
  min-height: 600px;
  @include centerFlex;
  .skilCard {
    height: 460px;
    width: 300px;
    background-color: #d1d1d1;
  }
}
</style>
