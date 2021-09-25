type KeyLike = number | string | symbol;

export type MyRecord<K extends KeyLike, V> = {
  [key in K]: V;
};
