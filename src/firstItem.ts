export type FirstItem<T extends any[]> = T extends [
  firstItem: infer P,
  ...args: any
]
  ? P
  : never;
