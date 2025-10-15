# 🧭 楓之谷技能模擬器 (MapleSkillSim)

以 **Vue 3 + Pinia + TypeScript** 製作的技能分配模擬器。  
玩家可依角色階段分配技能點數，並可進行加點、減點與重置操作。

---

## 📘 專案概要
- 分階段顯示技能資料（例如初心者、一轉）
- 各階段擁有固定總點數 (`allNum`)
- 單一技能上限 20 點
- 即時計算剩餘點數
- 支援一鍵清空與階段切換
- 支援 Vue Router 動態路由`/skill/:stage`

---

## 🧩 技術架構
| 類別 | 使用技術 |
|------|-----------|
| 前端框架 | Vue 3 (Composition API) |
| 狀態管理 | Pinia |
| 型別系統 | TypeScript |
| 打包工具 | Vite |
| 樣式 | SCSS |
| 路由系統 | Vue Router  |

---

## ⚙️ 功能清單
- ✅ 職業階段切換 (e.g. 一轉, 二轉)  
- ✅ 點數上限與剩餘計算  
- ✅ 技能加點 / 減點  
- ✅ 一鍵重置  
- ✅ 動態路由顯示  
- ✅ 結構化型別 (`Skill`, `SkillContent`)  

---
## 📂 專案結構
src/
├─ assets/
├─ components/
├─ pages/
│  ├─ about/
│  │  └─ about.vue
│  └─ home/
│     ├─ components/
│     │  └─ Content.vue
│     └─ subpages/
│        ├─ Skill.vue
│        └─ index.vue
├─ router/
│  └─ index.ts
├─ stores/
│  └─ counter.ts
├─ styles/
│  ├─ main.scss
│  ├─ mixins.scss
│  └─ variables.scss
├─ types/
│  └─ skill.ts
└─ App.vue
---

## 🧭 路由結構

### Vue Router
```ts
// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Skill from '@/pages/home/subpages/Skill.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    name:"skill",
    path:"/Skill/:stage?",
    component: Skill, 
    props: true,
    },
  ],
})

export default router
