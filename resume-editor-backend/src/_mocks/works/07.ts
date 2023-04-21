import { Work } from '../../types/Work';

const main = `
#### 【システム概要】

診断内容やクリニックを選択して、医師とのチャットを行い診断を行うアプリサービス。
本人確認画像を送信して登録を行い、その後症状とクリニックを選択してチャットを開始して処方箋を受け取る。

#### 【担当フェーズ】

開発

#### 【担当業務】

- 画面イメージに従い、HTML、 CSS3、 JavaScript を用いて本人確認画像送信画面、クリニック選択画面、チャット画面などのフロントエンド部分を改修する形でコーディングを行いました。
- 画面設計の都合上、DB カラムをっ追加が望ましい場合など、必要に応じてメンバーに提案を行いました。
`;

export const work07: Work = {
  id: '7',
  organization: 'B社',
  title: 'ネット診断サービス/Webアプリケーション改修',
  main,
  times: {
    start: '2018-03',
    end: '2018-04',
  },
  teams: {
    全体: 3,
  },
  environments: {
    言語: ['JavaScript', ' HTML5', ' CSS3', ' Ruby(Ruby on Rails)'],
    DB: ['MySQL', 'Firebase'],
  },
};
