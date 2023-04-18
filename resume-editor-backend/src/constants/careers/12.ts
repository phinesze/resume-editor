import { Career } from "@/types/Career";

import main from "@/constants/careers/12.md";
export const career12: Career = {
  id: 12,
  title: "VR空間共有サービスにおけるフロントエンド／バックエンドの開発",
  main,
  times: {
    start: "2020-04",
    end: "2020-05",
  },
  teams: {
    全体: 3,
  },
  environments: {
    フロントエンド: ["JavaScript", " Node.js", "Vue.js", "Nuxt.js"],
    バックエンド: ["JavaScript", "Express", "MySQL"],
  },
};
