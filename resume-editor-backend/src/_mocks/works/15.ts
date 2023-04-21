import { Work } from '../../types/Work';

const main = `
#### 【想定するエンドユーザー】

一般ユーザー

#### 【システム概要】

コンテンツ出品ユーザーとファンとの交流機能や EC 機能などを備えた Web サービスの新規開発を行う。

#### 【開発手法】

- エンジニアは１週間に一度程度課題の確認のミーティングを 1 回行う。・クライアントなどから修正する点の課題が上がった場合、その課題が管理ツール上に上り、それを修正していく。修正する手段についてはエンジニアに任されている。
- フロントエンドプロジェクトとバックエンドプロジェクトと gitbook 用の基本設計や API の設計などを書き込むための doc プロジェクトがあり、それぞれを git clone をしてローカルに展開する。

#### 【担当フェーズ】

フロントエンド(Vue.js/Nuxt.js)の npm フレームワークの選定、バックエンドを含む基本設計、詳細設計、開発

#### 【担当業務】

- Vue.js／Nuxt.js を新規に作成して、デザイナーが作成した AdobeXD や HTML のモックから、ボタンや入力要素などのコンポーネントの設計・開発を主導して行いました。
- ESLint、Prettier など使用する Node.js フレームワークの選定・導入と設定を主導して行いました。
- バックエンドの API でフロントエンド側との繋ぎ込みを考慮して、API のリクエスト・レスポンスと DB の設計(共に gitbook ドキュメント)を改修を提案するプルリクエストを発行いたしました。
- 前述のプリクエストに伴うコーディングの改修を一部自身で行いました。
- バックエンド側や Firebase Authentication との通信を axios で実装しました。
`;

export const work15: Work = {
  id: 15,
  title:
    'コンテンツを出品するユーザーとそのファンとの交流または物品またはデジタルデータの販売を行うECサイトの開発',
  main,
  times: {
    start: '2021-04',
    end: '2021-08',
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
      ' axios',
      'Vue Composition Api',
    ],
    バックエンド: [
      'TypeScript',
      'Google loud Platform',
      'Firebase Authentication',
      'Cloud Functions',
      'Google Spanner',
    ],
    その他: [
      'Jira(BitBucketと連携する)',
      'docker',
      'gitbook',
      'Stripe(決済API)',
    ],
  },
};
