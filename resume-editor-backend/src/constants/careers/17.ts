import { Work } from '../../types/Work';

import main from '@/constants/careers/17.md';

export const career17: Work = {
  id: 17,
  title: '地方自治体をエンドユーザーとする交通・人流分析WEBアプリの開発',
  main,
  times: {
    start: '2021-09',
    end: '2022-01',
  },
  teams: {
    PM: 2,
    開発: [6, 10],
  },
  environments: {
    フロントエンド: [
      'TypeScript',
      ['Vue.js', { version: '2' }],
      ['Nuxt', { version: '2' }],
      'Vuetify',
      'Mapbox',
      'ESLint',
      'Prettier',
      'Stylelint',
      'Sass',
      ' axios',
      'Vue Composition Api',
    ],
    バックエンド: ['PostgresSQL'],
    その他: ['docker'],
  },
};
