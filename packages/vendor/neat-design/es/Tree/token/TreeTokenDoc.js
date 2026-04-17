/**
 * @file TreeTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['color-text-primary', 'color-text-disabled', 'color-icon', 'color-icon-secondary', 'color-icon-disabled', 'color-bg-hover', 'color-border-divider', 'font-size-body-small', 'font-size-body-medium', 'font-size-body-large', 'line-height-static-16', 'line-height-static-20', 'line-height-static-24', 'size-4x', 'size-5x', 'size-6x', 'size-static-20', 'size-3x', 'size-static-28', 'size-static-14', 'size-2x', 'spacing-tight', 'border-radius-none'],
  component: genToken(defaultToken)
};