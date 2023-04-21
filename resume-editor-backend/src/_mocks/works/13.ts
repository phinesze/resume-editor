import { Work } from '../../types/Work';

const main = `
#### 【システム概要】

主にフロントエンドの新規開発、モックアップとして動く HTML を Vue コンポーネントとして分割などの作業を行う。

#### 【担当フェーズ】

開発

#### 【担当業務】

フロントエンド(Vue.js、Quasar)の新規開発と API 部分(PHP)の改修、追加を行う。
`;

export const work13: Work = {
  id: 13,
  organization: 'H社',
  title: '住宅注文システムなどのフロントエンド／バックエンドの開発',
  main,
  times: {
    start: '2020-06',
    end: '2020-11',
  },
  teams: {
    全体: 4,
  },
  environments: {
    フロントエンド: ['JavaScript', 'Vue.js', 'Quasar'],
    バックエンド: ['PHP'],
  },
};
