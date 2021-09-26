export type MyInstanceType<
  ConstructorType extends new (...args: any[]) => any
> = ConstructorType extends new (...args: any[]) => infer P ? P : never;
