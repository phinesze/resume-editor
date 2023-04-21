import { Work } from '../../types/Work';

const main = `
#### 【システム概要】

電子部品メーカーの社内向けの工数管理システム。
各メンバーが各月ごとのページから日付/プロジェクトごとに割り振られた格子状のマスに作業時間を入力して、プロジェクトの進捗情報などの集計を行う。

#### 【担当フェーズ】

詳細設計、開発、テスト

#### 【担当業務】

要件定義、外部設計を基として詳細設計と ASP.NET と JavaScript、 HTML5、 CSS3 をコーディング、ストアドプロシージャを含む SQL のコーディング、単体・結合テストを開発メンバーと共にに行いました。
`;

export const work04: Work = {
  id: '4',
  title: '大手電子部品メーカー/社内向け工数管理システムの新規開発',
  main,
  times: {
    start: '2015-10',
    end: '2016-03',
  },
  teams: {
    全体: 3,
  },
  environments: {
    OS: ['Windows Server2008'],
    言語: ['VB.NET', 'ASP.NET MVC(v3)'],
    DB: ['Microsoft SQL Server'],
  },
};
