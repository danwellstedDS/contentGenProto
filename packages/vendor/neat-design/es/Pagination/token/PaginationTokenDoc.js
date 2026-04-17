/**
 * @file PaginationTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['color-text-primary', 'color-text-secondary', 'color-primary', 'color-primary-press', 'color-text-disabled', 'color-icon', 'color-icon-disabled', 'color-bg-flat', 'color-bg-disabled', 'font-size-body-small', 'font-size-body-medium', 'line-height-static-16', 'line-height-static-20', 'size-3x', 'size-4x', 'size-static-12', 'size-2x', 'spacing-tight', 'spacing-slightly-tight', 'border-radius-small', 'border-radius-base'],
  component: genToken(defaultToken)
};