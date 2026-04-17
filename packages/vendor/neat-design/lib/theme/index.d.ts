/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { ThemeConfig } from './interface';
export declare const PowerBlackTheme: ThemeConfig;
export declare const defaultTheme: ThemeConfig;
export { genComponentsToken } from './components/genComponentsToken';
export { genSubComponentsToken } from './subComponents/genSubComponentsToken';
export { default as neatTheme2AntTheme } from './util/neatTheme2AntTheme';
export type { ComponentTokenMap, SubComponentTokenMap, ThemeConfig, } from './interface';
