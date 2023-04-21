import { Work } from '../../types/Work';

const main = `
#### 【システム概要】

グループ各社で使用されている顧客・ユーザーに関するデータを含めたサービス全般で使用されるデータベースを、社内向けにグループ全体で一括管理をするたのディレクトサービスシステムのウェブサービスの既存システムの置き換えを目的とした開発を行う。

#### 【開発手法】

- 開発のための設計書などは Confluence で管理する。
- 平日 1 回進捗などの確認のためのミーティングを 15 分ほど行う。
- 課題管理を Jira で行う。
- Jira で管理されたチケットを単位に GitHub 上で Pull Request を出しコードレビューを受けて随時改修する。
- チーム内のメンバーの Pull Request に対してコードレビューを行う。

#### 【担当フェーズ】

- Vue.js フロントエンドの開発、Node.js、NestJS による Backend to frontend の開発。Jest による単体テストケースの作成、postman による E2E テストケースの作成、Python による Airflow タスクの構築、コードレビュー。

#### 【担当業務】

- ページに対応するフロントエンドのページを Nuxt.js で開発いたしました。
- デザイナーの作成した機能要件を満たすボタン、入力・選択、セレクトボックスなどの設計・開発を共同で行いました。・チーム内のメンバーの Pull Request に対してコードレビューを行いました。
- フロントエンド上の一部フレームワークの導入の提案や改修の提案を行い、同様に Pull Request でレビューを行いつつ改善いたしました。
- Nest.js で作成された Backend to frontend のエンドポイントの開発、テストケースの作成を行いました。
- E2E テストを postman 形式のファイルで作成・開発いたしました。
- ワークフロー管理ツール Apache Airflow のタスクの構築を行いました。
`;

export const work19: Work = {
  id: '19',
  organization: 'K社',
  title:
    'グループ社内で使用するディレクトリサービスシステムの既存システムからのリプレイス開発',
  main,
  times: {
    start: '2022-04',
    end: '2023-03',
  },
  teams: {
    PM: 2,
    開発: [6, 10],
  },
  environments: {
    フロントエンド: [
      ['Vue.js', { version: '2' }],
      ['Nuxt', { version: '2' }],
      'Tailwind CSS',
      'Daisy UI',
      'ESLint',
      'Prettier',
      'Sass',
      'axios',
      'Vue Composition Api',
      'Jest',
    ],
    BFF: ['Nest.js'],
    バックエンド: ['Java', 'Spring'],
    その他: ['Python', 'docker'],
  },
};
