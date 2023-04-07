import { Career } from "@/types/Career";
import main from "@/constants/careers/20.md";

export const career20: Career = {
  id: 20,
  title: "データ活用のマーケティングツールの開発",
  main,
  times: {
    start: "2022-11",
  },
  environments: {
    フロントエンド: ["TypeScript", "React", "Next.js", "Tailwind css", "Jest"],
    バックエンド: ["PHP", "Laravel", "MongoDB"],
    その他: ["docker"],
  },
};
