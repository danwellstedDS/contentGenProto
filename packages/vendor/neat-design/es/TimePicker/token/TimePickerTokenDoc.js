/**
 * @file TimePickerTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['color-text-primary', 'color-primary', 'color-text-secondary', 'color-text-inverse', 'color-text-disabled', 'color-bg', 'color-bg-hover', 'color-bg-press', 'color-bg-disabled', 'color-border-divider', 'font-size-body-medium', 'size-4x', 'size-8x', 'spacing-tight', 'spacing-base-tight', 'spacing-base', 'border-radius-small'],
  component: genToken(defaultToken)
};