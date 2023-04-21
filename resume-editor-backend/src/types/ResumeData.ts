import { Work, WorkGroup } from '@/types/Work';
import { TextSection } from '@/types/TextSection';

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
    textSections?: TextSection[];
  };
  templateData: object;
}
