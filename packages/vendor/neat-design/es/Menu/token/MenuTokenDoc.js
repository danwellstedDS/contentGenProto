/**
 * @file MenuTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['color-text-primary', 'color-primary', 'color-icon-enhance', 'color-icon', 'color-icon-inverse', 'color-border-divider', 'color-bg', 'color-bg-hover', 'color-bg-enhance', 'neutral-9', 'font-size-body-medium', 'line-height-static-16', 'size-static-20', 'size-static-12', 'size-8x', 'size-32x', 'size-5x', 'size-3x', 'spacing-base-tight', 'spacing-tight', 'spacing-loose', 'spacing-static-10', 'spacing-base', 'border-radius-base', 'border-radius-circle'],
  component: genToken(defaultToken)
};