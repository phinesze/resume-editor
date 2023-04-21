import { Work } from '../../types/Work';

const main = `
#### 【システム概要】

ファーストパーティーデータ活用のデータ統合ツールの開発を行う。

#### 【担当業務】

- フロントエンドの改修依頼を行う。
`;

export const work20: Work = {
  id: 20,
  organization: 'L社',
  title: 'データ活用のマーケティングツールの開発',
  main,
  times: {
    start: '2022-11',
  },
  environments: {
    フロントエンド: ['TypeScript', 'React', 'Next.js', 'Tailwind css', 'Jest'],
    バックエンド: ['PHP', 'Laravel', 'MongoDB'],
    その他: ['docker'],
  },
};
