/**
 * @file applyHexOpacity.ts
 * @description Hexadecimal color values are set transparency-related
 * @author rzh(peter.rao@derbysoft.net)
 */
export declare const HexTransparencyCodeMap: {};
export declare function validateHexColor(hexColor: string): boolean;
export default function (
/**
 * @description Compliant hexadecimal color value
 * @example '#fff', '#000000'
 */
hexColor: string, 
/**
 * @description The natural numbers of [0-100]
 * @example 20, 30, 56, 78
 */
opacityNum: number): string;
