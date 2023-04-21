import { Work } from '../../types/Work';

const main = `
#### 【システム概要】

電子部品メーカーの法人向けのコネクタ検索のウェブサイトのフロントエンド・バックエンドの改修を行う。

#### 【担当フェーズ】

詳細設計、開発、テスト

#### 【担当業務】

要件定義、基本設計を基として詳細設計とコーディング、単体・結合テストを行いました。
`;

export const work02: Work = {
  id: '2',
  title: '大手電子部品メーカー/コネクタ（電子部品）検索サイトの改修、追加開発',
  main,
  times: {
    start: '2014-01',
    end: '2014-03',
  },
  teams: {
    全体: 3,
  },
  environments: {
    OS: ['Windows Server2008'],
    言語: ['VB.NET', ['ASP.NET MVC', { version: 3 }]],
    DB: ['Microsoft SQL Server'],
  },
};
