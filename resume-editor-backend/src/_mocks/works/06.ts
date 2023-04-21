import { Work } from '../../types/Work';

const main = `
#### 【システム概要】

電子部品メーカーの社内向けの健康保険管理システム。宿泊予約サイトの API とつながる形で予約を入れる。

#### 【担当フェーズ】

詳細設計、開発、テスト

#### 【担当業務】

要件定義、外部設計を基として詳細設計とコーディング、単体・結合テストを行いました。
`;

export const work06: Work = {
  id: 6,
  title: '大手電子部品メーカー/社内用健康保険システムの新規開発',
  main,
  times: {
    start: '2017-07-07',
    end: '2017-07-09',
  },
  teams: {
    全体: 3,
  },
  environments: {
    OS: ['Windows Server 2008'],
    言語: ['VB.NET', ' ASP.NET MVC(v3)'],
    DB: ['Microsoft SQL Server'],
  },
};
