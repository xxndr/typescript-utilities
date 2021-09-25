export type MyRequired<T> = {
  [key in keyof T]-?: T[key];
};
