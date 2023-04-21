import { Work } from '../../types/Work';

const main = `
#### 【システム概要】

企業ウェブサイトのリニューアルに伴いレスポンシブ対応、かつパララックスの視覚効果に対応したのウェブページの開発を行う。

#### 【担当フェーズ】

フレームワークの選定、基本設計、詳細設計、製造

#### 【担当業務】

要件定義と画面イメージを基として、要求された視覚効果のリクエストに応じて、jQuery フレームワークの選定と HTML5、 CSS3、 JavaScript のコーディングを行いました。
`;

export const work03: Work = {
  id: '3',
  title: '企業ウェブサイトの新規開発',
  main,
  times: {
    start: '2015-04',
    end: '2015-09',
  },
  teams: {
    全体: 3,
  },
  environments: {
    言語: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
  },
};
