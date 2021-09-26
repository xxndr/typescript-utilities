export type MyParameters<Type extends (...args: any[]) => any> = Type extends (
  ...args: infer ParameterType
) => any
  ? ParameterType
  : undefined;
