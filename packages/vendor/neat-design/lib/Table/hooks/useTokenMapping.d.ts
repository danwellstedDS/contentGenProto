/**
 * @file useTokenMapping.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { TableToken } from '../token/TableToken';
export type TokenMapping = Record<string, keyof TableToken>;
declare const useTokenMapping: (tokenMapping: TokenMapping) => {};
export default useTokenMapping;
