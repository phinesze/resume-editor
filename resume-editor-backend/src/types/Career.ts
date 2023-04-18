export type CareerEnvironment = string | [string, { version?: string | number }?]
export type CareerEnvironmentList = { [key: string]: CareerEnvironment[] };
export type CareerTeamNumber = number | [number, number];
export type CareerTeamNumberList = { [key: string]: CareerTeamNumber };

export type Career = {
  id: number,
  title?: string,
  main?: unknown,
  times?: object,
  teams?: CareerTeamNumberList,
  environments?: CareerEnvironmentList
}

