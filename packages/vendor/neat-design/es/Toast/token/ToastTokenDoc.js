/**
 * @file ToastTokenDoc.ts
 * @author sunday(sunday.wei@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['color-text-primary', 'color-text-link', 'color-text-link-hover', 'color-text-link-press', 'color-text-link-disabled', 'color-accent', 'color-positive', 'color-notice', 'color-negative', 'color-accent-sunken', 'color-positive-sunken', 'color-notice-sunken', 'color-negative-sunken', 'font-size-body-medium', 'font-size-body-small', 'line-height-static-20', 'size-static-20', 'spacing-base-tight', 'spacing-base', 'border-radius-base'],
  component: genToken(defaultToken)
};