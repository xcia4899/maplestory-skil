import { ref,reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import type { SkillContent,SkillItem } from '@/types/skill';
export const useCounterStore = defineStore('counter', () => {
  
const skillList = reactive<SkillItem[]>([
  {
    stage: "PRE0",
    allNum:40,
    content: [
      {
        id: "pre00-01",
        name: "嫩寶丟擲",
        count: 0,
        img: new URL("@/assets/skil/10001.jpg", import.meta.url).href,
      },
       {
        id: "pre00-02",
        name: "紅寶丟擲",
        count: 0,
        img: new URL("@/assets/skil/10002.jpg", import.meta.url).href,
      },
       {
        id: "pre00-03",
        name: "藍寶丟擲",
        count: 0,
        img: new URL("@/assets/skil/10003.jpg", import.meta.url).href,
      },
    ],
  },
  {
    stage: "PRE1",
    allNum:50,
    content: [
      {
        id: "pre01-01",
        name: "紅寶丟擲",
        count: 0,
        img: new URL("@/assets/skil/10005.jpg", import.meta.url).href,
      },
      {
        id: "pre01-02",
        name: "魔龍丟擲",
        count: 0,
        img: new URL("@/assets/skil/10006.jpg", import.meta.url).href,
      },
      {
        id: "pre01-03",
        name: "木妖丟擲",
        count: 0,
        img: new URL("@/assets/skil/10007.jpg", import.meta.url).href,
      },
    ],
  },
]);

const add = (skill: SkillContent) => {
  skill.count += 1;
};

  return { skillList ,add}
})
