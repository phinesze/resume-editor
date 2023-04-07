import { Career } from "@/types/Career";

import main from "@/constants/careers/18.md";

export const career18: Career = {
  id: 18,
  title:
    "不動産仲介サービスの開発と健康機器メーカーのアンケートウェブサイトの制作",
  main,
  times: {
    start: "2022-02",
    end: "2022-03",
  },
  teams: {
    PM: 1,
    開発: 6,
  },
  environments: {
    フロントエンド: [
      ["Vue.js", { version: "2" }],
      ["Nuxt", { version: "2" }],
      "Vuetify",
      "ESLint",
      "Prettier",
      "Sass",
      "axios",
      "Vue Composition Api",
      "1dColor",
      "themeleaf",
    ],
    その他: ["docker"],
  },
};
