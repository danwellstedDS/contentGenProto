/**
 * @file ColorMapping.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { Color } from '../Badge';
import type { BadgeToken } from '../token/BadgeToken';
declare const ColorMapping: Partial<Record<Color, keyof BadgeToken>>;
export default ColorMapping;
