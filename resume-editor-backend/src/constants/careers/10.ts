import { Work } from '../../types/Work';

import main from '@/constants/careers/10.md';
export const career10: Work = {
  id: 10,
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
