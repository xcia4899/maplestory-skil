<template>
  <li v-for="skill in newSkilList" :key="skill.content.id" class="skillItem">
    <div class="itemIcon">
      <img :src="skill.content.img" alt="" />
    </div>
    <div class="itemDetail">
      <div class="itemTitle">{{ skill.content.name }}</div>
      <div class="itemContent">
        <div class="itemNum">{{ skill.content.count }}</div>
        <button @click="add(skill.content)" class="btnUpdateSkill"></button>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
const props = defineProps<{
  stage: string;
}>();
const skilNum = ref(0);
interface SkillContent {
  id: string;
  name: string;
  count: number;
  img: string;
}
interface SkillItem {
  stage: string;
  content: SkillContent;
}
const skillList = reactive<SkillItem[]>([
  {
    stage: "A",
    content: {
      id: "pre01",
      name: "嫩寶丟擲",
      count: 0,
      img: new URL("@/assets/skil/10001.jpg", import.meta.url).href,
    },
  },
  {
    stage: "B",
    content: {
      id: "pre02",
      name: "紅寶丟擲",
      count: 0,
      img: new URL("@/assets/skil/10002.jpg", import.meta.url).href,
    },
  },
]);

const add = (skill: SkillContent) => {
  skill.count += 1;
};
const newSkilList = computed(() =>
  skillList.filter((val) => val.stage === props.stage)
);
</script>

<style scoped lang="scss">
.skillItem {
  width: 100%;
  display: flex;
  height: 64px;
  .itemIcon {
    aspect-ratio: 1/1;
    height: 100%;
    padding: 2px;
    img {
      height: 100%;
      width: 100%;
      padding: 4px;
    }
  }

  .itemDetail {
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: space-evenly;

    width: 100%;
    border-radius: 2px;
    padding: 1px 0px;
    .itemTitle {
      background-color: $color-skyBlue;
      padding: 2px 4px;
      user-select: none;
    }
    .itemContent {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2px 4px;
      background-color: $color-skyBlue;
      .btnUpdateSkill {
        width: 24px;
        aspect-ratio: 1;
      }
    }
  }
}
</style>
