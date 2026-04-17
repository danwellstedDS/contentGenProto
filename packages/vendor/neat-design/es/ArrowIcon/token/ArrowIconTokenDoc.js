/**
 * @file ArrowIconTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['color-icon', 'color-primary', 'color-primary-press', 'color-icon-disabled', 'size-2x'],
  component: genToken(defaultToken)
};