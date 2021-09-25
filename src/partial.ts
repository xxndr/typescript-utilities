export type MyPartial<T> = {
  [key in keyof T]?: T[key];
};
