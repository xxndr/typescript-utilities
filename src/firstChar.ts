export type FirstChar<T extends string> =
  T extends `${infer FirstLetter}${string}` ? FirstLetter : never;
