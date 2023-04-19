/**
 * @member id ユーザー名
 * @member fullName 氏名
 * @member resumeDataIds ResumeDataのuserIdと多対1
 */
export interface User {
  id: string;
  fullName: string;
  resumeDataIds: string[];
}
