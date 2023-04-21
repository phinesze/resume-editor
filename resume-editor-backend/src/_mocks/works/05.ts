import { Work } from '../../types/Work';

const main = `
#### 【システム概要】

保険代理店用のアプリケーションの設計・コーディング・単体テストなど
従来紙の書類などで行っていた顧客、保険代理店、保険会社との間の取引を電子化し、Web アプリケーションにしたシステムの開発、運用保守を行う。

#### 【担当フェーズ】

詳細設計、開発、テスト

#### 【担当業務】

要件定義署を基として、詳細設計書の作成、コーディングと単体テスト作業を行いました。
`;

export const work05: Work = {
  id: '5',
  title: 'アジア向け仕事紹介クラウドソーシングサービスの自社開発',
  main,
  times: {
    start: '2016-04-1',
    end: '2017-06',
  },
  teams: {
    全体: 3,
  },
  environments: {
    OS: [['Cent OS', { version: 6 }]],
    言語: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
    DB: ['MySQL'],
  },
};
