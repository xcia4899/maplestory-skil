import { createRouter, createWebHistory } from "vue-router";

import Skill from "@/pages/home/subpages/Skill.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "skill",
      path: "/Skill/:stage?",
      component: Skill,
      props: true,
    },
  ],
});

// 全域守衛：僅允許 PRE0 / PRE1，否則導向 PRE0
// const allowedStages = new Set(["PRE0", "PRE1"]);
// router.beforeEach((to) => {
//   if (to.name === "skill") {
//     const stage = to.params.stage as string | undefined;
//     if (!stage || !allowedStages.has(stage)) {
//       return { name: "skill", params: { stage: "PRE0" } };
//     }
//   }
//   return true;
// });

export default router;
