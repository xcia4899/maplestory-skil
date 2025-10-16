import { createRouter, createWebHistory } from "vue-router";
import Skill from "@/pages/home/subpages/Skill.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 一進首頁就導到 /Skill/PRE0
    {
      path: "/",
      redirect: { name: "skill", params: { stage: "PRE0" } },
    },
    // 若有人進到 /Skill（沒帶參數），也導到 PRE0（可選，建議加）
    {
      path: "/Skill",
      redirect: { name: "skill", params: { stage: "PRE0" } },
    },
    {
      name: "skill",
      path: "/Skill/:stage",
      component: Skill,
      props: true,
    },
  ],
});

export default router;