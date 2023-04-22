export type GetResponse<T> =
  | {
      result: T;
    }
  | {
      errors: string[];
    };
