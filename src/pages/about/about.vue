<template>
  <ul class="news-list">
    <li>編號: {{ id }}</li>
    <li>標題: {{ title }}</li>
    <li>內容: {{ content }}</li>
  </ul>
</template>

<script setup lang="ts">
// 使用 <script setup> 搭配 TypeScript 定義元件的 props。
// defineProps 在編譯階段自動生成型別與綁定，不需手動 return。

defineProps<{
  id: string;          // 必填：資料或路由的唯一識別
  title: string;       // 必填：顯示標題
  content?: string;    // 選填：顯示內容，允許為 undefined
}>();
</script>