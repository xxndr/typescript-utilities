export type MyExtract<T, U> = T extends U ? T : never;
