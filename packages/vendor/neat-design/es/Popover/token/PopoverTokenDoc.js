/**
 * @file PopoverTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['color-text-primary', 'color-bg', 'color-info', 'font-size-body-medium', 'font-size-body-large', 'line-height-static-20', 'line-height-static-24', 'size-static-20', 'spacing-base', 'spacing-tight', 'spacing-loose', 'border-radius-base'],
  component: genToken(defaultToken)
};