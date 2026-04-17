/**
 * @file LabelTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['color-border-divider', 'spacing-base', 'spacing-loose', 'spacing-base-loose', 'spacing-tight', 'spacing-base-tight'],
  component: genToken(defaultToken)
};