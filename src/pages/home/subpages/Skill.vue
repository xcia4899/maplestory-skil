<template>
  <li v-for="skill in newSkilList" :key="skill.id" class="skillItem">
    <div class="itemIcon">
      <img :src="skill.img" alt="" />
    </div>
    <div class="itemDetail">
      <div class="itemTitle">{{ skill.name }}</div>
      <div class="itemContent">
        <div class="itemNum">{{ skill.count }}</div>
        <button @click="add(skill)" class="btnUpdateSkill"></button>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useCounterStore } from "@/stores/counter"
import type { SkillContent } from '@/types/skill';


const countStore = useCounterStore()
const { add } = countStore;

const props = defineProps<{
  stage: string;
}>();

const newSkilList = computed<SkillContent[]>(
  () => countStore.skillList.find(s => s.stage === props.stage)?.content ?? []
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




