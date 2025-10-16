import { ref, reactive, onMounted } from "vue";
import { defineStore } from "pinia";
import type { SkillContent, Skill } from "@/types/skill";
import axios from "axios";

export const useCounterStore = defineStore("counter", () => {
  const BasicPrelist = [
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
  ];

  let pirate: any[] = [];

  // [
  //   {
  //     stage: "PRE1",
  //     title: "海盜之路",
  //     allNum: 50,
  //     content: [
  //       {
  //         id: "pre01-01",
  //         name: "炸彈丟擲",
  //         count: 0,
  //         img: new URL("@/assets/skil/10005.jpg", import.meta.url).href,
  //       },
  //       {
  //         id: "pre01-02",
  //         name: "魔龍丟擲",
  //         count: 0,
  //         img: new URL("@/assets/skil/10006.jpg", import.meta.url).href,
  //       },
  //       {
  //         id: "pre01-03",
  //         name: "子彈丟擲",
  //         count: 0,
  //         img: new URL("@/assets/skil/10007.jpg", import.meta.url).href,
  //       },
  //     ],
  //   },
  //   {
  //     stage: "PRE2",
  //     title: "老手海盜?",
  //     allNum: 60,
  //     content: [
  //       {
  //         id: "pre02-01",
  //         name: "土龍丟擲",
  //         count: 0,
  //         img: new URL("@/assets/skil/10010.jpg", import.meta.url).href,
  //       },
  //       {
  //         id: "pre02-02",
  //         name: "章魚丟擲",
  //         count: 0,
  //         img: new URL("@/assets/skil/10011.jpg", import.meta.url).href,
  //       },
  //       {
  //         id: "pre02-03",
  //         name: "海鷗丟擲",
  //         count: 0,
  //         img: new URL("@/assets/skil/10012.jpg", import.meta.url).href,
  //       },
  //     ],
  //   },
  // ];
  const sword = [
    {
      stage: "PRE1",
      title: "劍士之路",
      allNum: 50,
      content: [
        {
          id: "pre01-01",
          name: "摩天一擊",
          count: 0,
          img: new URL("@/assets/skil/10005.jpg", import.meta.url).href,
        },
        {
          id: "pre01-02",
          name: "大劍丟擲",
          count: 0,
          img: new URL("@/assets/skil/10006.jpg", import.meta.url).href,
        },
        {
          id: "pre01-03",
          name: "快速攻擊",
          count: 0,
          img: new URL("@/assets/skil/10007.jpg", import.meta.url).href,
        },
      ],
    },
    {
      stage: "PRE2",
      title: "老手劍士",
      allNum: 60,
      content: [
        {
          id: "pre02-01",
          name: "強化",
          count: 0,
          img: new URL("@/assets/skil/10016.jpg", import.meta.url).href,
        },
        {
          id: "pre02-02",
          name: "精準之劍",
          count: 0,
          img: new URL("@/assets/skil/10015.jpg", import.meta.url).href,
        },
        {
          id: "pre02-03",
          name: "強壯身體",
          count: 0,
          img: new URL("@/assets/skil/10014.jpg", import.meta.url).href,
        },
      ],
    },
  ];
  const mage = [
    {
      stage: "PRE1",
      title: "魔法之路",
      allNum: 50,
      content: [
        {
          id: "pre01-01",
          name: "魔力爪",
          count: 0,
          img: new URL("@/assets/skil/10005.jpg", import.meta.url).href,
        },
        {
          id: "pre01-02",
          name: "魔靈但",
          count: 0,
          img: new URL("@/assets/skil/10006.jpg", import.meta.url).href,
        },
        {
          id: "pre01-03",
          name: "魔力之盾",
          count: 0,
          img: new URL("@/assets/skil/10007.jpg", import.meta.url).href,
        },
      ],
    },
    {
      stage: "PRE2",
      title: "資深法師",
      allNum: 60,
      content: [
        {
          id: "pre02-01",
          name: "落雷",
          count: 0,
          img: new URL("@/assets/skil/10016.jpg", import.meta.url).href,
        },
        {
          id: "pre02-02",
          name: "冰風暴",
          count: 0,
          img: new URL("@/assets/skil/10015.jpg", import.meta.url).href,
        },
        {
          id: "pre02-03",
          name: "火焰噴射",
          count: 0,
          img: new URL("@/assets/skil/10014.jpg", import.meta.url).href,
        },
      ],
    },
    {
      stage: "PRE3",
      title: "大法師",
      allNum: 70,
      content: [
        {
          id: "pre03-01",
          name: "元素風暴",
          count: 0,
          img: new URL("@/assets/skil/10016.jpg", import.meta.url).href,
        },
        {
          id: "pre03-02",
          name: "魔力強化",
          count: 0,
          img: new URL("@/assets/skil/10015.jpg", import.meta.url).href,
        },
        {
          id: "pre03-03",
          name: "專精魔力",
          count: 0,
          img: new URL("@/assets/skil/10014.jpg", import.meta.url).href,
        },
      ],
    },
  ];
  const archer = [
    {
      stage: "PRE1",
      title: "弓箭之路",
      allNum: 50,
      content: [
        {
          id: "pre01-01",
          name: "連射",
          count: 0,
          img: new URL("@/assets/skil/10005.jpg", import.meta.url).href,
        },
        {
          id: "pre01-02",
          name: "鷹眼",
          count: 0,
          img: new URL("@/assets/skil/10006.jpg", import.meta.url).href,
        },
        {
          id: "pre01-03",
          name: "強力射擊",
          count: 0,
          img: new URL("@/assets/skil/10007.jpg", import.meta.url).href,
        },
      ],
    },
    {
      stage: "PRE2",
      title: "見習遊俠",
      allNum: 60,
      content: [
        {
          id: "pre02-01",
          name: "無限彈藥",
          count: 0,
          img: new URL("@/assets/skil/10016.jpg", import.meta.url).href,
        },
        {
          id: "pre02-02",
          name: "快速移動",
          count: 0,
          img: new URL("@/assets/skil/10015.jpg", import.meta.url).href,
        },
        {
          id: "pre02-03",
          name: "精準射擊",
          count: 0,
          img: new URL("@/assets/skil/10014.jpg", import.meta.url).href,
        },
      ],
    },
    {
      stage: "PRE3",
      title: "遊俠",
      allNum: 70,
      content: [
        {
          id: "pre03-01",
          name: "強力射擊",
          count: 0,
          img: new URL("@/assets/skil/10016.jpg", import.meta.url).href,
        },
        {
          id: "pre03-02",
          name: "箭雨",
          count: 0,
          img: new URL("@/assets/skil/10015.jpg", import.meta.url).href,
        },
        {
          id: "pre03-03",
          name: "爆炸射擊",
          count: 0,
          img: new URL("@/assets/skil/10014.jpg", import.meta.url).href,
        },
      ],
    },
  ];
  const thief = [
    {
      stage: "PRE1",
      title: "盜賊之路",
      allNum: 50,
      content: [
        {
          id: "pre01-01",
          name: "偷竊",
          count: 0,
          img: new URL("@/assets/skil/10005.jpg", import.meta.url).href,
        },
        {
          id: "pre01-02",
          name: "看破斬",
          count: 0,
          img: new URL("@/assets/skil/10006.jpg", import.meta.url).href,
        },
        {
          id: "pre01-03",
          name: "隱身",
          count: 0,
          img: new URL("@/assets/skil/10007.jpg", import.meta.url).href,
        },
      ],
    },
    {
      stage: "PRE2",
      title: "神偷",
      allNum: 60,
      content: [
        {
          id: "pre02-01",
          name: "飛鏢投擲",
          count: 0,
          img: new URL("@/assets/skil/10016.jpg", import.meta.url).href,
        },
        {
          id: "pre02-02",
          name: "閃現",
          count: 0,
          img: new URL("@/assets/skil/10015.jpg", import.meta.url).href,
        },
        {
          id: "pre02-03",
          name: "高速移動",
          count: 0,
          img: new URL("@/assets/skil/10014.jpg", import.meta.url).href,
        },
      ],
    },
    {
      stage: "PRE3",
      title: "暗影",
      allNum: 70,
      content: [
        {
          id: "pre03-01",
          name: "隱身斬",
          count: 0,
          img: new URL("@/assets/skil/10016.jpg", import.meta.url).href,
        },
        {
          id: "pre03-02",
          name: "暗殺強化",
          count: 0,
          img: new URL("@/assets/skil/10015.jpg", import.meta.url).href,
        },
        {
          id: "pre03-03",
          name: "中毒武器",
          count: 0,
          img: new URL("@/assets/skil/10014.jpg", import.meta.url).href,
        },
      ],
    },
  ];
  const skillList = reactive<Skill[]>([]);

  onMounted(async () => {
    try {
      const url = `${import.meta.env.BASE_URL}data/skills/pirate.json`;
      const { data } = await axios.get<Skill[]>(url);

      const hydrated = data.map((s) => ({
        ...s,
        content: s.content.map((c) => ({
          ...c,
          img: new URL(`../assets/skil/${c.img}`, import.meta.url).href,
        })),
      }));

      pirate = hydrated;
      console.log("載入成功:", pirate);
    } catch (err) {
      console.error("載入失敗:", err);
    }
  });

  // loadPirateJson()
  // 職業資料快取（保留各自加點紀錄）
  const professionCache = new Map<string, Skill[]>();

  //當使用者選擇新職業時執行
  const getPre = (profession: string) => {
    // 嘗試從快取中取得此職業的技能資料
    let next = professionCache.get(profession);
    // 若快取中沒有 → 新生成一份資料

    if (!next) {
      next = composeFor(profession); // 組合職業對應的技能清單
      professionCache.set(profession, next); // 存入快取（保留加點紀錄）
    }
    // 用新資料更新畫面上的 skillList
    replaceSkillList(next);
    // 調試輸出
    // console.log("更新後資料:", skillList);
  };
  // ---------- 替換技能清單 ----------
  // 保持 skillList 響應性不變，只更新內容
  function replaceSkillList(next: Skill[]) {
    // → 清空原內容並插入新資料
    skillList.splice(0, skillList.length, ...next);
    // 重建上限快照
    // rebuildInitialNum(skillList);
  }

  // ---------- 拷貝函式 ----------
  // 產生一份新的技能資料副本，避免不同職業之間共享同一組物件引用
  function cloneSkills(src: Skill[]): Skill[] {
    return src.map((s) => ({
      ...s, // 複製每個階段物件（stage、title、allNum 等屬性）
      content: s.content.map((c) => ({ ...c })), // 逐一複製每個技能項，確保彼此獨立
    }));
  }

  // ---------- 組合職業資料 ----------
  // 根據選擇的職業組成完整技能清單（包含共用的 PRE0）
  function composeFor(profession: string): Skill[] {
    if (profession === "初心者") {
      // 初心者只有基本階段
      return cloneSkills(BasicPrelist);
    }
    if (profession === "海盜") {
      // 海盜包含共用 PRE0 + 海盜專屬階段
      return cloneSkills([...BasicPrelist, ...pirate]);
    }
    if (profession === "劍士") {
      // 劍士包含共用 PRE0 + 劍士專屬階段
      return cloneSkills([...BasicPrelist, ...sword]);
    }
    if (profession === "法師") {
      // 劍士包含共用 PRE0 + 劍士專屬階段
      return cloneSkills([...BasicPrelist, ...mage]);
    }
    if (profession === "弓箭手") {
      // 劍士包含共用 PRE0 + 劍士專屬階段
      return cloneSkills([...BasicPrelist, ...archer]);
    }
    if (profession === "盜賊") {
      // 劍士包含共用 PRE0 + 劍士專屬階段
      return cloneSkills([...BasicPrelist, ...thief]);
    }
    // 預設回傳基本階段
    return cloneSkills(BasicPrelist);
  }

  // ---------- 階段上限快照 ----------
  // 用來儲存每個階段 allNum 的初始上限（切換職業時會重建）
  const initialNum = reactive<Record<string, number>>({});

  function rebuildInitialNum(list: Skill[]) {
    console.log("查詢", initialNum);
    // 先清空舊資料（保持引用不變，確保響應式仍生效）
    for (const k of Object.keys(initialNum)) delete (initialNum as any)[k];
    // 重新根據目前 skillList 的每個 stage 填入對應上限
    for (const s of list) (initialNum as any)[s.stage] = s.allNum;
  }

  // // 工具：計算該階段剩餘點數 = 上限 - 已分配
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
    const capacity = initialNum[stageItem.stage] ?? stageItem.allNum;
    const allocated = stageItem.content.reduce((sum, c) => sum + c.count, 0);
    if (allocated >= capacity) return; // 沒有剩餘點數
    const perSkillCap = stageItem.stage === "PRE0" ? 3 : 20;
    if (skill.count >= perSkillCap) return;
    skill.count++;
  };

  const reduce = (skill: SkillContent) => {
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

  // 預設載入初心者
  replaceSkillList(composeFor("初心者"));

  return { skillList, add, reduce, clearAll, getAllNum, getTitle, getPre };
});
