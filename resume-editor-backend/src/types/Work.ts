export type WorkEnvironment = string | [string, { version?: string | number }?];
export type WorkEnvironmentList = { [key: string]: WorkEnvironment[] };
export type WorkTeamNumber = number | [number, number];
export type WorkTeamNumberList = { [key: string]: WorkTeamNumber };

export interface Work {
  id: number;
  title?: string;
  main?: string;
  times?: object;
  teams?: WorkTeamNumberList;
  environments?: WorkEnvironmentList;
}
