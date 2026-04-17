/**
 * @file Token.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type AliasToken from './AliasToken';
import type GlobalToken from './GlobalToken';
type Token = AliasToken & GlobalToken;
export default Token;
