import { reactive } from "vue";
import { defineStore } from "pinia";
import type { SkillContent, Skill } from "@/types/skill";

export const useCounterStore = defineStore("counter", () => {
  const list: Skill[] = [
    {
      stage: "PRE0",
      title: "初心者",
      allNum: 6,
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
      title: "海盜之路",
      allNum: 50,
      content: [
        {
          id: "pre01-01",
          name: "紅寶丟擲",
          count: 0,
          img: new URL("@/assets/skil/10005.jpg", import.meta.url).href,
        },
        {
          id: "pre01-02",
          name: "魔法丟擲",
          count: 0,
          img: new URL("@/assets/skil/10006.jpg", import.meta.url).href,
        },
        {
          id: "pre01-03",
          name: "猛擊丟擲",
          count: 0,
          img: new URL("@/assets/skil/10007.jpg", import.meta.url).href,
        },
      ],
    },
    {
      stage: "PRE2",
      title: "老手海盜",
      allNum: 60,
      content: [
        {
          id: "pre02-01",
          name: "火槍丟擲",
          count: 0,
          img: new URL("@/assets/skil/10010.jpg", import.meta.url).href,
        },
        {
          id: "pre02-02",
          name: "炸彈丟擲",
          count: 0,
          img: new URL("@/assets/skil/10011.jpg", import.meta.url).href,
        },
        {
          id: "pre02-03",
          name: "章魚丟擲",
          count: 0,
          img: new URL("@/assets/skil/10012.jpg", import.meta.url).href,
        },
      ],
    },
  ];

  const skillList = reactive<Skill[]>(list);

  // 每個階段的初始配額（allNum）的快照
  const initialNum: Record<string, number> = Object.fromEntries(
    list.map((s) => [s.stage, s.allNum])
  );
  // 計算該階段剩餘點數 = 初始配額 - 已分配
  const getAllNum = (stage: string): number => {
    const stageItem = skillList.find((s) => s.stage === stage);
    if (!stageItem) return 0;
    const allocated = stageItem.content.reduce((sum, c) => sum + c.count, 0);
    const capacity = initialNum[stage] ?? stageItem.allNum;
    const remain = capacity - allocated;
    return remain > 0 ? remain : 0;
  };

  // 取得階段標題
  const getTitle = (stage: string): string => {
    const stageItem = skillList.find((s) => s.stage === stage);
    return stageItem?.title || "\u672A\u8F49\u8077";
  };

  const add = (skill: SkillContent) => {
    const stageItem = skillList.find((s) => s.content.includes(skill));
    if (!stageItem) return;
    const capacity = initialNum[stageItem.stage] ?? stageItem.allNum; // 初始配額
    const allocated = stageItem.content.reduce((sum, c) => sum + c.count, 0); // 已分配總數
    // 沒有剩餘點數，直接離開
    if (allocated >= capacity) return;
    // 依階段決定單項上限
    const perSkillCap = stageItem.stage === "PRE0" ? 3 : 20;
    if (skill.count >= perSkillCap) return;
    skill.count++;
  };

  const reduce = (skill: SkillContent) => {
    // 以技能本身逆向找到所屬階段
    const stageItem = skillList.find((s) => s.content.includes(skill));
    if (!stageItem) return;
    if (skill.count > 0) {
      skill.count--;
    }
  };

  const clearAll = () => {
    skillList.forEach((stage) => {
      stage.content.forEach((skill) => {
        skill.count = 0;
      });
    });
  };

  return { skillList, add, reduce, clearAll, getAllNum, getTitle };
});
