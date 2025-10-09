<template>
  <section id="content">
    <div class="skilCard">
      <div class="header">技能欄</div>

      <div class="skilContent">
        <nav class="profession">
          <a class="active">初心者</a>
          <a>一轉</a>
          <a>二轉</a>
          <a>三轉</a>
          <a>四轉</a>
        </nav>
        <div class="title">
          <img src="" alt="" />
          <div><h3>海盜之路</h3></div>
        </div>
        <div class="skilArea">技能頁面</div>
      </div>

      <li class="footer">技能點數<span>3</span></li>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
* {
  // border: 1px solid red;
}
#content {
  min-height: 600px;
  @include centerFlex;
}
.skilCard {
  position: relative;
  height: 460px;
  width: 300px;
  background-color: #91c6e7;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 3px 4px 6px 2px #333333;
 
  overflow: hidden;
  .header {
    @include centerFlex;
    justify-content: flex-start;
    padding: 0px 8px;
    background-color: #f7fbfd;
    box-shadow: 0 1px 4px 0.6px #a6b1b8;
    border-radius: 4px;
  }
  .skilContent {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 4px;

    box-shadow: inset 0 -2px 6px 0px #bdced8;
    .profession {
      display: flex;
      position: relative;

      a {
        @include centerFlex;
        // flex: 0.5;
        width: 20%;
        padding: 4px;
        color: #fff;
        background-color: #949494;
        border: 1px solid #020424;

        border-radius: 6px 6px 0 0;
        box-shadow: inset 0 1px 1px 2px rgba(248, 248, 248, 1);
      }
      a.active {
        background-color: #db86a7;
      }
    }
    .title {
      background-color: #eee;

      padding: 12px 8px 6px;
      transform: translateY(-1px);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      box-shadow: 0 2px 6px 0px rgb(104, 104, 104, 0.6);
      img {
        height: 50px;
        width: 60px;
        background-color: #d4873f;
      }
      div {
        @include centerFlex;
        height: 50px;
        border: 0px solid black;
        border-width: 1px 1px 1px 0px;
        padding: 6px 1px;
        flex: 1;
        background-color: #ff9114;
        border-radius: 0px 6px 6px 0px;
        h3 {
          width: 100%;
          text-align: center;
          background-color: #4a494d;
          color: #eaf7ff;
          border-radius: 0px 4px 4px 0px;
        }
      }
    }
    .skilArea {
      flex: 1;
      overflow-y: scroll;
      background: #e4e4e4;
      padding: 8px;
    }
  }
  .footer {
    // position: relative;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: flex; /* 讓點與文字同行 */
    align-items: center;
    padding: 4px 20px;
    // margin: 0 4px 2px;
    margin-bottom: 2px;
    background-color: #c0e4fa;
    border-radius: 0 0 6px 6px;
    box-shadow: inset 0 5px 2px 0.2px #eaf7ff;
    span {
      width: 60px;
      margin-left: 12px;
      border: 1px solid #020424;
      background-color: #fff;
      border-radius: 2px;
      padding: 0px 8px;
      box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.6);
      text-align: right;
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
