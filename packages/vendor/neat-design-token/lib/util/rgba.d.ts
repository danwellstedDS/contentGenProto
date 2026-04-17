/**
 * @file rgba.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
/**
 * Remove the hash symbol of hex if it is existed.
 * @param hex
 */
export declare function removeHexHashSymbol(hex: string): string;
/**
 * Format hex to 6 digitals if it is 3.
 * @param hex
 */
export declare function completeHex(hex: string): string;
/**
 * Format hex to rgb array.
 * @param hex
 */
export declare function hex2Rgb(hex: string): number[];
/**
 * Format hex + alpha to rgba(r, g, b, a).
 * @param hex
 * @param alpha
 */
export declare function rgba(hex: string, alpha: number): string;
export default rgba;
