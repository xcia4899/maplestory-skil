export interface SkillContent {
  id: string;
  name: string;
  count: number;
  img: string;
}

export interface Skill {
  stage: string;
  allNum: number;
  content: SkillContent[];
}

