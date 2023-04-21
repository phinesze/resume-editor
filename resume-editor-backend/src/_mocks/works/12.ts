import { Work } from '../../types/Work';

const main = `
#### 【システム概要】

VR 空間の共有サービス
フロントエンドまたはバックエンド部分の改修を行う。

#### 【担当フェーズ】

開発

#### 【担当業務】

- フロントエンド(Vue.js、Nuxt.js)とバックエンド API(Node.js+Express)部分の改修を中心にコーディングを行いました。
- iframe 埋め込み部分や ReCAPTCHA(V3)など外部サービスとフロントエンド／バックエンド部分の連携も行いました。
`;

export const work12: Work = {
  id: '12',
  organization: 'G社',
  title: 'VR空間共有サービスにおけるフロントエンド／バックエンドの開発',
  main,
  times: {
    start: '2020-04',
    end: '2020-05',
  },
  teams: {
    全体: 3,
  },
  environments: {
    フロントエンド: ['JavaScript', ' Node.js', 'Vue.js', 'Nuxt.js'],
    バックエンド: ['JavaScript', 'Express', 'MySQL'],
  },
};
