/**
 * @file DividerTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['color-border-divider', 'color-text-primary', 'color-icon', 'font-size-body-medium', 'line-height-static-20', 'spacing-base'],
  component: genToken(defaultToken)
};