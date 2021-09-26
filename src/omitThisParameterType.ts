export type MyOmitThisParameter<
  Type extends (this: any, ...args: any[]) => any
> = Type extends (this: any, ...args: infer P) => infer O
  ? (...args: P) => O
  : never;
