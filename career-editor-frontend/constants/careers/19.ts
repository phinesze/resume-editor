import { Career } from "@/types/Career";
import main from "@/constants/careers/19.md";

export const career19: Career = {
  id: 19,
  title:
    "グループ社内で使用するディレクトリサービスシステムの既存システムからのリプレイス開発",
  main,
  times: {
    start: "2022-04",
    end: "2023-03",
  },
  teams: {
    PM: 2,
    開発: [6, 10],
  },
  environments: {
    フロントエンド: [
      ["Vue.js", { version: "2" }],
      ["Nuxt", { version: "2" }],
      "Tailwind CSS",
      "Daisy UI",
      "ESLint",
      "Prettier",
      "Sass",
      "axios",
      "Vue Composition Api",
      "Jest",
    ],
    BFF: ["Nest.js"],
    バックエンド: ["Java", "Spring"],
    その他: ["Python", "docker"],
  },
};
