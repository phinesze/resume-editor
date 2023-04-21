import { ResumeData } from '@/types/ResumeData';
import { works } from '@/_mocks/works/works';

const users: ResumeData[] = [
  {
    id: '1',
    title: '職務経歴書1',
    userId: '1',
    data: {
      caption: '職務経歴書',
      lastUpdate: '2023-04-03',
      works: works,
      documents: [],
    },
    templateData: {},
  },
  {
    id: '2',
    title: '職務経歴書2',
    userId: '1',
    data: {
      caption: '職務経歴書',
      lastUpdate: '2023-04-13',
      works: [],
      documents: [],
    },
    templateData: {},
  },
  {
    id: '3',
    userId: '2',
    title: 'resume_1',
    data: {
      caption: 'RESUME',
      lastUpdate: '2023-04-15',
      works: [],
      documents: [],
    },
    templateData: {},
  },
];
