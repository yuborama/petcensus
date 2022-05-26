declare module "@types" {
  export type CWT<A, B> = A &
    B & {
      [key: string]: any;
    };
}
