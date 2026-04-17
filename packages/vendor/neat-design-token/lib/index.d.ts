/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
export { default as ladderColor } from './color/ladderColor';
export { default as PowerBlackToken } from './token/powerBlack';
export declare const defaultToken: import("./interface/Token").default;
export { default as globalTokenMeta } from './token/globalTokenMeta';
export * from './util/rgba';
export type { AliasToken, LadderColor, Token } from './interface';
