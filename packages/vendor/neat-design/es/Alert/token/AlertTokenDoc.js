/**
 * @file AlertTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['color-text-primary', 'color-text-link', 'color-text-link-hover', 'color-text-link-disabled', 'color-info', 'color-positive', 'color-notice', 'color-negative', 'color-info-sunken', 'color-positive-sunken', 'color-notice-sunken', 'color-negative-sunken', 'color-info-enhance', 'color-positive-enhance', 'color-notice-enhance', 'color-negative-enhance', 'font-size-body-large', 'font-size-body-medium', 'font-size-body-small', 'line-height-static-20', 'size-static-20', 'spacing-base', 'spacing-extra-tight', 'spacing-loose', 'border-radius-base'],
  component: genToken(defaultToken)
};