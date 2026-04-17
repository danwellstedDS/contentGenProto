/**
 * @file LabelTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['color-text-secondary', 'color-text-negative', 'color-text-placeholder', 'color-icon-secondary', 'font-size-body-small', 'font-size-body-medium', 'font-size-body-large', 'line-height-static-16', 'line-height-static-20', 'line-height-static-24', 'size-2x', 'size-static-20', 'spacing-extra-tight'],
  component: genToken(defaultToken)
};