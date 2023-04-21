export type WorkEnvironment = string | [string, { version?: string | number }?];
export type WorkEnvironmentList = { [key: string]: WorkEnvironment[] };
export type WorkTeamNumber = number | [number, number];
export type WorkTeamNumberList = { [key: string]: WorkTeamNumber };

export interface WorkGroup {
  organization: string;
  works: (Work | WorkGroup)[];
}

export interface Work {
  id: string | number;
  organization?: string;
  title?: string;
  main?: string;
  times?: object;
  teams?: WorkTeamNumberList;
  environments?: WorkEnvironmentList;
}
