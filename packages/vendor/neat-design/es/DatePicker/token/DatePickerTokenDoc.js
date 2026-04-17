/**
 * @file DatePickerTokenDoc.ts
 * @author sunday(sunday.wei@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['color-text-primary', 'color-text-secondary', 'color-text-inverse', 'color-text-disabled', 'color-bg', 'color-bg-hover', 'color-bg-press', 'amber-1', 'amber-2', 'green-1', 'green-2', 'color-primary', 'color-primary-hover', 'color-notice', 'color-notice-hover', 'color-positive', 'color-positive-hover', 'color-bg-disabled', 'color-bg-raised', 'color-primary-enhance', 'color-notice-enhance', 'color-positive-enhance', 'color-border-disabled', 'color-border', 'color-icon', 'color-border-divider', 'font-size-body-medium', 'size-4x', 'size-6x', 'size-8x', 'spacing-tight', 'spacing-base-tight', 'border-radius-small', 'border-radius-base'],
  component: genToken(defaultToken)
};