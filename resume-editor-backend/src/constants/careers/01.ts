import { Career } from "@/types/Career";
import main from "@/constants/careers/1.md";

export const career01: Career = {
  id: 1,
  title: "Web会計アプリケーションの開発及び改修（自社開発）",
  main,
  times: {
    start: "2013-08",
    end: "2015-03",
  },
  teams: {
    全体: 3,
  },
  environments: {
    OS: [["Cent OS", { version: 6 }]],
    言語: ["PHP", " JavaScript", " jQuery", " HTML5", " CSS3"],
    DB: ["MySQL"],
  },
};
