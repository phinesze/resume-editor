import { Work } from '../../types/Work';

const main = `
#### 【システム概要】

中古車 EC サイトでの Web サービスの保守運用業務。
ソースコードのリアルタイムでの改修とリリースなどの保守運用業務を行う。

#### 【担当フェーズ】

開発・運用保守

#### 【担当業務】

メンバーと相談しつつ、PHP(CakePHP)、JavaScript などでのソースコードの改修とサービスの保守運用業務を行いました。
`;

export const work09: Work = {
  id: '9',
  organization: 'D社',
  title: '中古車ECサイト/Webアプリケーション運用保守',
  main,
  times: {
    start: '2018-11',
    end: '2018-12',
  },
  teams: {
    全体: 8,
  },
  environments: {
    フロントエンド: ['JavaScript'],
    バックエンド: ['PHP', 'MySQL'],
  },
};
