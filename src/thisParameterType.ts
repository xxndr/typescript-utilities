export type MyThisParameterType<
  Type extends (this: any, ...args: any[]) => any
> = Type extends (this: infer P, ...args: any[]) => any ? P : unknown;
