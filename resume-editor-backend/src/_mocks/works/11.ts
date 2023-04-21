import { Work } from '../../types/Work';

const main = `
#### 【システム概要】

大手求人ウェブサイトの開発・運用業務

#### 【担当フェーズ】

開発・保守運用

#### 【担当業務】

- チケット開発駆動の業務プロセスに従い、フロントエンド部分の改修を中心にのコーディングを行いました。
- メンバーと相談しつつ、業務効率化のために Python と Node.js で自作のスクリプトを提案して、実際に制作いたしました。
`;

export const work11: Work = {
  id: '11',
  organization: 'F社',
  title: '大手求人ウェブサイトのフロントエンド開発・運用',
  main,
  times: {
    start: '2019-11',
    end: '2020-02',
  },
  teams: {
    全体: 10,
  },
  environments: {
    フロントエンド: ['JavaScript', ' HTML5', ' CSS3', 'Vue.js'],
    バックエンド: [],
    その他: ['Node.js', 'Python(V3)'],
  },
};
