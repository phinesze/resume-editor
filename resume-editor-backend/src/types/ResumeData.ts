import { Work, WorkGroup } from './Work';

/**
 * @member id レジュメID
 * @member userId ユーザーID
 * @member title タイトル
 * @member data データの中身
 */
export interface ResumeData {
  id: string;
  userId: string;
  title: string;
  data: {
    caption?: string;
    lastUpdate?: string;
    works?: (Work | WorkGroup)[];
    documents?: string[];
  };
  templateData: object;
}
