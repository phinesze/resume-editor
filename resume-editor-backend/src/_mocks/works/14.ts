import { Work } from '../../types/Work';

const main = `
#### 【想定するエンドユーザー】

企業の人事担当者など

#### 【システム概要】

人材管理システムのフロントエンドを中心に新規開発を行う。

#### 【開発手法】

- エンジニアは１週間に一度程度課題の確認のミーティングを 1 回行う。
- エンジニアのリストを登録して、週何時間稼働可能かなどの情報や過去に何時稼動したかどうかをグラフなどで表示する。
- ユーザー認証としてAuth0を使用したシングルサインオンを使用する。
- フロントエンドプロジェクトとバックエンドプロジェクトと gitbook 用の基本設計や API の設計などを書き込むための doc プロジェクトがあり、それぞれを git clone をしてローカルに展開する。

#### 【担当フェーズ】

フロントエンドのフレームワーク選定・バックエンドを含む基本設計・詳細設計・開発

#### 【担当業務】

- Vue.js／Nuxt.js で作成されていたフロントエンド側のモックを新規のバージョン(composition-api)に置き換えて、ボタンや入力要素などのコンポーネントの再設計と開発を主導して行いました。
- Node.js フレームワークの選定・導入と設定を主導して行いました。
- バックエンド側や Firebase Authentication との通信を axios で実装しました。
- バックエンドの API や DB の設計(gitbook ドキュメント)を改修する提案を行い、それに伴うコーディングの改修を一部行いました。
`;

export const work14: Work = {
  id: '14',
  title: '自社開発のエンジニア人材管理システムのフロントエンドを中心とした開発',
  main,
  times: {
    start: '2020-12',
    end: '2021-03',
  },
  teams: {
    全体: 4,
  },
  environments: {
    フロントエンド: [
      ['Vue.js', { version: '2' }],
      ['Nuxt', { version: '2' }],
      'TypeScript',
      'ESLint',
      'Prettier',
      'Pug',
      'Sass',
      'axios',
      'Vue composition-api',
    ],
    バックエンド: ['TypeScript', 'AWS SAM', 'Node.js', 'Postgre SQL'],
    その他: ['docker', 'gitbook'],
  },
};
