/**
  <DocumentBody label="自己PR" document={about} />
  <DocumentBody label="主な経験" document={frameworks} />
  <DocumentBody label="アカウント" document={accounts} />
  <Projectbody />
  <DocumentBody label="一問一答" document={supplement} />
 */
import accountMd from "@/constants/accounts.md"

export const 構造 = [
  {
    type: 'DocumentBody',
    label: '自己PR',
    params: {},
  },
  {
    type: 'DocumentBody',
    label: '主な経験',
    params: {},
  },
  {
    type: 'DocumentBody',
    label: 'アカウント',
    params: {
      
    },
  },
];
