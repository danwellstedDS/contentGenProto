/**
 * @file DrawerTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['color-border-divider', 'color-text-primary', 'color-bg', 'font-size-header-5', 'font-size-body-medium', 'size-40x', 'size-75x', 'size-120x', 'size-7x', 'spacing-loose', 'spacing-base'],
  component: genToken(defaultToken)
};