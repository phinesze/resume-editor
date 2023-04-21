import { Work } from '../../types/Work';

const main = `
#### 【システム概要】

ファッション EC サイトのフロントエンドをメインとした開発やリリースの作業を行う。

#### 【担当フェーズ】

開発・保守運用

#### 【担当業務】

Wrike のチケットや AdobeXD の内容に従いフロントエンド側の改修作業や新規コンポーネントの開発を行いました。
`;

export const work16: Work = {
  id: '16',
  organization: 'J社',
  title: '既存ファッションECサイトの開発',
  main,
  times: {
    start: '2021-07',
    end: '2021-08',
  },
  teams: {
    全体: 3,
  },
  environments: {
    フロントエンド: ['JavaScript', ' HTML5', ' CSS3', 'Sass', 'PHP'],
    バックエンド: [],
  },
};
