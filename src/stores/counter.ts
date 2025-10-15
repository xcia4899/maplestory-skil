import { reactive } from "vue";
import { defineStore } from "pinia";
import type { SkillContent, Skill } from "@/types/skill";

export const useCounterStore = defineStore("counter", () => {
  const list = [
    {
      stage: "PRE0",
      allNum: 40,
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
  ];
  const skillList = reactive<Skill[]>(list);
  //過濾出技能初始值，並處理成物件
  const initialNum: Record<string, number> = Object.fromEntries(
    list.map((s) => [s.stage, s.allNum])
  );
  // console.log(initialNum);

  // 計算指定階段剩餘可分配點數
  const getAllNum = (stage: string) => {
    const stageItem = skillList.find((s) => s.stage === stage);
    if (!stageItem) return 0;
    // 計算該階段目前已分配的技能點總和
    const allocated = stageItem.content.reduce((sum, c) => sum + c.count, 0);
    // 取得該階段的總容量（若無則使用目前 allNum）
    const capacity = initialNum[stage] ?? stageItem.allNum;
    // 計算剩餘點數，避免負值
    const remain = capacity - allocated;
    return remain > 0 ? remain : 0;
  };


  const add = (skill: SkillContent) => {
    // 以技能本身逆向找到所屬階段
    const stageItem = skillList.find((s) => s.content.includes(skill));
    if (!stageItem) return;
    const allocated = stageItem.content.reduce((sum, c) => sum + c.count, 0);
    const capacity = initialNum[stageItem.stage] ?? stageItem.allNum;
    if (skill.count < 20 && allocated < capacity) {
      skill.count++;
    }
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

  return { skillList, add, reduce, clearAll, getAllNum };
});
