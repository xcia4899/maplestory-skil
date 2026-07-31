# MapleStory Skill Simulator｜楓之谷技能模擬器

## 專案介紹

此作品為以《楓之谷》技能視窗為主題製作的技能配點模擬器，參考遊戲中的技能介面與視覺風格進行前端實作。

使用者可以切換初心者、一轉、二轉、三轉與四轉技能頁面，查看不同階段的技能內容，並進行技能點數分配與重置。

專案主要使用 Vue 3、TypeScript、Vue Router 與 Pinia 開發，著重於元件化架構、動態路由、狀態管理與遊戲 UI 還原。

* **專案類型：** 遊戲技能配點模擬器
* **開發方式：** 個人練習專案
* **核心技術：** Vue 3、TypeScript、Pinia、Vue Router

---

## 網站功能

網站主要包含以下功能：

* 初心者技能頁面
* 一轉技能頁面
* 二轉技能頁面
* 三轉技能頁面
* 四轉技能頁面
* 技能點數分配
* 剩餘技能點數計算
* 各轉職階段獨立管理
* 技能點數全部重置
* 動態技能標題
* 路由切換技能內容
* 楓之谷技能視窗 UI 還原
* 響應式版型設計

---

## 使用技術

* Vue 3
* TypeScript
* Vite
* Vue Router
* Pinia
* Axios
* SCSS
* Composition API
* Computed
* CSS Flexbox
* CSS Animation
* Media Query

---

## 專案特色

### 楓之谷技能視窗 UI 還原

網站參考楓之谷遊戲中的技能視窗進行設計，包含：

* 技能視窗標題列
* 轉職階段頁籤
* 職業標題區
* 技能列表
* 技能點數欄位
* 重置按鈕
* 遊戲風格背景
* 陰影與立體邊框

透過 SCSS 製作遊戲介面的漸層、陰影、圓角與立體效果，讓畫面更接近原始遊戲 UI。

### Vue Router 技能階段切換

使用 Vue Router 管理不同轉職階段。

每個階段透過路由參數表示：

```text
PRE0：初心者
PRE1：一轉
PRE2：二轉
PRE3：三轉
PRE4：四轉
```

頁面中的選單使用 `router-link` 切換路由：

```vue
<router-link
  :to="{
    name: 'skill',
    params: {
      stage: 'PRE0',
    },
  }"
>
  初心者
</router-link>
```

切換路由後，`router-view` 會顯示對應階段的技能內容：

```vue
<ul class="skillArea">
  <router-view />
</ul>
```

這種方式讓每個技能階段可以維持獨立頁面結構，同時共用外層的技能視窗版型。

### 動態路由參數

透過 `useRoute()` 取得目前路由中的 `stage`：

```ts
const route = useRoute();

const stage = (route.params.stage as string) || "PRE0";
```

頁面會根據目前的路由參數，自動更新：

* 技能階段
* 職業標題
* 剩餘技能點數
* 顯示的技能內容

當使用者切換頁籤時，不需要重新載入整個網站。

### Pinia 技能點狀態管理

使用 Pinia 管理各個技能的點數與不同轉職階段的剩餘點數。

Pinia Store 負責：

* 記錄每個技能目前等級
* 計算已使用的技能點數
* 計算剩餘技能點數
* 區分不同轉職階段
* 提供目前階段名稱
* 重置技能點數

頁面可以透過 Store 取得剩餘點數：

```ts
const countStore = useCounterStore();

const currentAllNum = computed(() => {
  const stage = (route.params.stage as string) || "PRE0";

  return countStore.getAllNum(stage);
});
```

讓技能資料集中管理，避免將狀態分散在不同元件中。

### 剩餘技能點數即時更新

使用 Vue 的 `computed` 建立剩餘技能點數：

```ts
const currentAllNum = computed(() => {
  const stage = (route.params.stage as string) || "PRE0";

  return countStore.getAllNum(stage);
});
```

當使用者增加、減少或重置技能點時，畫面上的剩餘點數會自動更新，不需要手動操作 DOM。

### 動態職業標題

目前顯示的標題也會根據路由階段變化：

```ts
const currentTitle = computed(() => {
  const stage = (route.params.stage as string) || "PRE0";

  return countStore.getTitle(stage);
});
```

模板中直接顯示計算結果：

```vue
<h3>{{ currentTitle }}</h3>
```

讓標題與技能內容保持同步。

### 技能點數重置

技能視窗底部提供「全部重置」功能：

```vue
<button @click="countStore.clearAll">
  全部重置
</button>
```

點擊後會呼叫 Pinia Store 中的 `clearAll`，將技能點數恢復為初始狀態。

### 路由啟用狀態

透過 Vue Router 自動加入的 Class 顯示目前選取的技能階段：

```scss
:deep(.router-link-active) {
  color: #f07c7c;
  background-color: #ffe3ea;
}

:deep(.router-link-exact-active) {
  font-weight: bold;
}
```

使用者可以清楚看見目前所在的轉職階段。

### Vue 元件化架構

網站將主要頁面拆分成不同元件，例如：

* Header
* Footer
* 技能視窗
* 技能階段頁面
* 技能項目
* 首頁版型

首頁負責組合主要區塊：

```vue
<template>
  <div class="bg-fixed">
    <Header />
    <Content />
    <Footer />
  </div>
</template>
```

透過元件化方式，讓版面與功能更容易維護。

### Composition API

專案使用 Vue 3 Composition API：

```vue
<script setup lang="ts">
```

搭配：

* `computed`
* `useRoute`
* Pinia Store
* TypeScript

集中處理頁面的狀態與衍生資料。

### SCSS 樣式管理

使用 SCSS 撰寫網站樣式，包含：

* 色彩變數
* 共用 Mixin
* 巢狀選擇器
* 技能視窗陰影
* 自訂 Scrollbar
* 遊戲風格按鈕
* 響應式版型

例如使用共用 Mixin 讓元素置中：

```scss
@include centerFlex;
```

降低重複的 Flexbox 樣式。

### 自訂技能列表捲軸

技能列表設定固定高度並提供垂直捲動：

```scss
.skillArea {
  overflow-y: scroll;
  max-height: 300px;
  min-height: 300px;
}
```

並針對 Chrome、Edge 與 Safari 自訂捲軸外觀：

```scss
.skillArea::-webkit-scrollbar {
  width: 12px;
}

.skillArea::-webkit-scrollbar-thumb {
  background: $color-darkBlue;
  border-radius: 4px;
}

.skillArea::-webkit-scrollbar-track {
  background: $color-blue;
}
```

讓捲軸風格與技能視窗保持一致。

---

## 專案結構

```text
maplestory-skil/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── styles/
│   │   └── bg.png
│   ├── components/
│   │   ├── Header.vue
│   │   └── Footer.vue
│   ├── pages/
│   │   └── home/
│   │       ├── components/
│   │       │   └── Content.vue
│   │       └── index.vue
│   ├── router/
│   ├── stores/
│   │   └── counter.ts
│   ├── App.vue
│   └── main.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 學習重點

透過此專案練習並加強以下能力：

* 使用 Vue 3 建立互動式網站
* 使用 TypeScript 撰寫 Vue 專案
* 使用 Composition API 管理元件邏輯
* 使用 Vue Router 建立技能階段頁面
* 使用動態路由參數切換內容
* 使用 `router-link` 建立頁籤導覽
* 使用 `router-view` 顯示子頁面
* 使用 Pinia 管理技能點數
* 使用 Computed 建立即時衍生資料
* 管理不同轉職階段的獨立狀態
* 實作技能點增加、減少與重置
* 使用 SCSS 還原遊戲 UI
* 建立自訂 Scrollbar
* 使用 Vite 建立與打包 Vue 專案

---

## 安裝與執行

```bash
# 安裝套件
npm install

# 啟動開發環境
npm run dev

# 執行型別檢查並建立正式版本
npm run build

# 預覽正式版本
npm run preview
```

---

## 專案連結

* **GitHub：** [xcia4899/maplestory-skil](https://github.com/xcia4899/maplestory-skil)
* **Live Demo：** [MapleStory Skill Simulator](https://xcia4899.github.io/maplestory-skil/)

---

## 備註

本專案主要作為 Vue 3、TypeScript、Vue Router 與 Pinia 狀態管理練習使用，網站中的遊戲名稱、圖片與相關素材，其著作權屬於原權利人所有。
