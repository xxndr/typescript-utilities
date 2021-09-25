export type MyOmit<T, K> = {
  [k in keyof T as k extends K ? never : k]: T[k];
};
