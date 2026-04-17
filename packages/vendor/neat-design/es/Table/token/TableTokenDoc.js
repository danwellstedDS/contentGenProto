/**
 * @file TableTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['color-text-primary', 'color-text-secondary', 'color-text-disabled', 'color-text-link', 'color-text-link-hover', 'color-text-link-press', 'color-text-link-disabled', 'color-icon', 'color-primary', 'color-icon-disabled', 'color-primary-enhance', 'color-bg', 'color-bg-hover', 'color-bg-enhance', 'color-bg-disabled', 'color-bg-sunken', 'color-border-divider', 'font-size-body-small', 'font-size-body-medium', 'font-size-body-large', 'font-size-body-extra-large', 'line-height-static-16', 'line-height-static-20', 'line-height-static-24', 'size-static-36', 'size-6x', 'size-8x', 'size-2x', 'size-static-20', 'size-3x', 'size-4x', 'size-5x', 'spacing-tight', 'spacing-base', 'spacing-slightly-tight', 'spacing-base-tight'],
  component: genToken(defaultToken)
};