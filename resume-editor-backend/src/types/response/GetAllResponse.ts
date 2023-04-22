export type GetAllResponse<T> =
  | {
      allCount: number;
      result: T[];
    }
  | {
      errors: string[];
    };
