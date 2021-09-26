export type MyReturnType<Type extends (...args: any[]) => any> = Type extends (
  ...args: any[]
) => infer P
  ? P
  : never;
