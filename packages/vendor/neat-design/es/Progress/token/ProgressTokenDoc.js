/**
 * @file ProgressTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['color-text-primary', 'color-text-inverse', 'color-bg-enhance', 'color-info', 'color-positive', 'color-negative', 'color-icon-inverse', 'font-size-body-small', 'font-size-body-medium', 'font-size-body-large', 'line-height-static-16', 'line-height-static-20', 'line-height-static-24', 'size-static-4', 'size-static-6', 'size-base', 'size-2x', 'size-static-20', 'size-3x', 'size-static-12', 'size-4x', 'size-static-36', 'size-5x', 'size-6x', 'size-10x', 'size-15x', 'spacing-static-10', 'spacing-base-tight', 'spacing-super-tight', 'spacing-extra-tight', 'spacing-slightly-tight', 'spacing-tight', 'border-radius-circle'],
  component: genToken(defaultToken)
};