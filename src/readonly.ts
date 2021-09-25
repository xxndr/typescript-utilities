export type MyReadOnly<T> = {
  readonly [key in keyof T]: T[key];
};
