export type LastChar<T extends string> = T extends `${infer A}${infer P}`
  ? LastChar<P> extends ""
    ? A
    : LastChar<P>
  : never;
