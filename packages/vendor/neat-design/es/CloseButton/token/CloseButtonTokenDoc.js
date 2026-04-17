/**
 * @file CloseButtonTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['neutral-29', 'neutral-0', 'size-2x', 'size-static-18'],
  component: genToken(defaultToken)
};