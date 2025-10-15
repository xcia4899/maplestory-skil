<template>
  <section id="content">
    <div class="skillCard">
      <div class="header">技能攔</div>

      <div class="skillContent">
        <nav class="profession">
          <router-link
            :to="{
              name: 'skill',
              params: {
                stage: 'PRE0',
              },
            }"
            class="link"
            >初心者
          </router-link>
          <router-link :to="{
              name: 'skill',
              params: {
                stage: 'PRE1',
              },
            }" class="link">
            一轉
          </router-link>
          <router-link :to="{
              name: 'skill',
              params: {
                stage: 'PRE2',
              },
            }" class="link">
            二轉
          </router-link>
          <router-link :to="{
              name: 'skill',
              params: {
                stage: 'PRE3',
              },
            }" class="link">
            三轉
          </router-link>
          <router-link :to="{
              name: 'skill',
              params: {
                stage: 'PRE4',
              },
            }" class="link">
            四轉
          </router-link>
        </nav>
        <div class="title">
          <img src="@/assets/bullet.png" alt="" />
          <div><h3>{{ currentTitle }}</h3></div>
        </div>
        <ul class="skillArea">
            <router-view></router-view>
        </ul>
      </div>
      
      <li class="footer">技能點數
        <span>{{currentAllNum}}</span>
        <button @click="countStore.clearAll">全部重置</button>
      </li>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from 'vue-router';
import { useCounterStore } from "@/stores/counter";

const route = useRoute();
const countStore = useCounterStore();

// 建立一個可自動更新取得當前階段的剩餘點數
const currentAllNum = computed(() => {
  // 取得目前路由參數中的 stage，若無（例如初次載入）則預設為 'PRE0'
  const stage = (route.params.stage as string) || 'PRE0';
  // 向 Pinia store 呼叫 getAllNum(stage)
  // 取得該階段的剩餘可分配點數（已加點數會被扣除）
  return countStore.getAllNum(stage);
});

const currentTitle = computed(() => {
  const stage = (route.params.stage as string) || 'PRE0';
  // 向 Pinia store 呼叫 getTitle(stage)
  return countStore.getTitle(stage);
});

</script>

<style scoped lang="scss">
#content {
  min-height: 600px;
  @include centerFlex;
}

.skillCard {
  position: relative;
  min-height: 460px;
  width: 300px;
  background-color: $color-white;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 3px 4px 6px 3px $color-black, inset 0 0px 0px 2px #565d61;
  border-radius: 8px;

  overflow: hidden;

  .header {
    @include centerFlex;
    justify-content: flex-start;
    padding: 0px 8px;
    background-color: $color-white;
    box-shadow: inset 0 5px 2px 0.2px $color-white,
      0 0px 2px 1px $color-darkBlue;
    border-radius: 4px;
    user-select: none;
  }
  .skillContent {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 4px;

    border-radius: 4px 4px 0 0;
    box-shadow: inset 0 5px 2px 0.2px $color-white,
      0 0px 2px 1px $color-darkBlue;
    .profession {
      display: flex;
      position: relative;
      .link,
      a {
        @include centerFlex;
        // flex: 0.5;
        width: 20%;
        padding: 4px;
        color: $color-white;
        background-color: #a09f9f;
        // border: 1px solid #020424;

        border-radius: 6px 6px 0 0;
        box-shadow: inset 0 1px 2px 3px $color-white, 0 0 2px 1px #020424;
        user-select: none;
      }
      //隞?”???????
      :deep(.router-link-active) {
        color: #f07c7c;
        background-color: #ffe3ea;
      }
      // 隞?”???典?????
      :deep(.router-link-exact-active) {
        font-weight: bold;
      }
    }
    .title {
      background-color: $color-gray;

      padding: 12px 8px 6px;
      transform: translateY(-1px);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      box-shadow: 0 2px 3px 0px rgba(124, 125, 126, 0.6);
      user-select: none;
      img {
        height: 50px;
        width: 60px;
        padding: 8px;
        border-radius: 4px;
        background-color: $color-white;
        box-shadow: inset 0 0px 1px 2px rgba(124, 125, 126, 0.6);
      }
      div {
        @include centerFlex;
        height: 50px;
        border: 0px solid $color-black;
        border-width: 1px 1px 1px 0px;
        padding: 6px 1px;
        flex: 1;
        background-color: #ff9114;
        border-radius: 0px 6px 6px 0px;
        h3 {
          width: 100%;
          text-align: center;
          background-color: $color-black;
          color: #eaf7ff;
          border-radius: 0px 4px 4px 0px;
        }
      }
    }
    .skillArea {
      flex: 1;
      overflow-y: scroll;
      scrollbar-gutter: stable;
      background: $color-white;
      padding: 8px;
      max-height: 300px;
      min-height: 300px;
      .skillItem {
        width: 100%;
        display: flex;
        height: 64px;
      }
    }
    /* Chrome / Edge / Safari */
    .skillArea::-webkit-scrollbar {
      width: 12px; /* 敹身嚗??銝撌桃 */
    }
    .skillArea::-webkit-scrollbar-thumb {
      background: $color-darkBlue;
      border-radius: 4px;
    }
    .skillArea::-webkit-scrollbar-track {
      background: $color-blue;
    }
  }
  .footer {
    // position: relative;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: flex; /* 霈???摮?銵?*/
    align-items: center;
    padding: 4px 20px;
    // margin: 0 4px 2px;
    margin-bottom: 2px;
    background-color: $color-blue;
    border-radius: 0 0 6px 6px;
    box-shadow: inset 0 5px 2px 0.2px $color-white,
      0 0px 2px 1px $color-darkBlue;
    user-select: none;

    span {
      width: 60px;
      margin-left: 12px;
      border: 1px solid $color-black;
      background-color: $color-white;
      border-radius: 2px;
      padding: 0px 8px;
      box-shadow: inset 0 0 2px 1px rgba(12, 12, 12, 0.6);
      text-align: right;
      user-select: none;
    }
    button{
       margin-left: auto;
    //  align-self: flex-end;
    }
  }
   .footer::before {
    content: "•"; /* 黑點符號 */
    margin-right: 6px;
    font-size: 1.4em;
    color: #222222; /* 點的顏色 */
    line-height: 1;
  }
}
</style>



