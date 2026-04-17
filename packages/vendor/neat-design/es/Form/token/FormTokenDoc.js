/**
 * @file FormTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['spacing-slightly-tight', 'spacing-extra-loose', 'spacing-super-loose', 'spacing-static-48', 'spacing-base-tight', 'spacing-static-14', 'spacing-base', 'spacing-base-loose', 'spacing-loose', 'spacing-tight', 'spacing-static-10'],
  component: genToken(defaultToken)
};