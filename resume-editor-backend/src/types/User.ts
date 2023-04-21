/**
 * @member id ユーザー名
 * @member fullName 氏名
 * @member profileIds ProfileのuserIdと多対1
 */
export interface User {
  id: string;
  fullName: string;
  profileIds: string[];
}
