import { Work } from '../../types/Work';

const main = `
#### 【システム概要】

不動産情報ウェブサイトとアンケートウェブサイトのフロントエンドの開発・テストを行う。

#### 【担当フェーズ】

フロントエンドの開発

#### 【担当業務】

- （不動産仲介サービス）Redmine による改善要求に伴いフロントエンド側の改修作業を行いました。
- （アンケートウェブサイトの制作）Adove XD ファイルのデザインを元に 1d-Color のプラットフォーム上で質問ページを HTML, CSS, JavsScript で作成しました。
`;

export const work18: Work = {
  id: '18',
  organization: 'I社→L社、M社',
  title:
    '不動産仲介サービスの開発と健康機器メーカーのアンケートウェブサイトの制作',
  main,
  times: {
    start: '2022-02',
    end: '2022-03',
  },
  teams: {
    PM: 1,
    開発: 6,
  },
  environments: {
    フロントエンド: [
      ['Vue.js', { version: '2' }],
      ['Nuxt', { version: '2' }],
      'Vuetify',
      'ESLint',
      'Prettier',
      'Sass',
      'axios',
      'Vue Composition Api',
      '1dColor',
      'themeleaf',
    ],
    その他: ['docker'],
  },
};
