import { Work } from '../../types/Work';

const main = `
#### 【システム概要】

半導体製造工場にて導入する MES(生産管理システム)である SiView のクライアントアプリケーション
SiView を直接操作する場合には専門知識が必要となるため、Web ブラウザ側で操作が可能なクライアントアプリケーションの新規バージョン開発。

#### 【担当フェーズ】

開発

#### 【担当業務】

詳細設計書に従い、Angular(6)と UI フレームワーク PrimeNG を用いた画面制御部分の新規コーディングを行いました。
`;

export const work10: Work = {
  id: 10,
  organization: 'E社',
  title: '大手半導体メーカー/生産管理システムのクライアントアプリケーション',
  main,
  times: {
    start: '2019-01',
    end: '2019-10',
  },
  teams: {
    全体: 8,
  },
  environments: {
    フロントエンド: ['TypeScript', ['Angular', { version: '6' }]],
    バックエンド: ['Java'],
  },
};
