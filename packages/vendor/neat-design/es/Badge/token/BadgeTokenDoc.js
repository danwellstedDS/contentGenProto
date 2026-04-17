/**
 * @file BadgeTokenDoc.ts
 * @author sunday(sunday.wei@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['color-text-primary', 'color-text-inverse', 'color-primary', 'color-primary-enhance', 'neutral-0', 'color-negative', 'color-info', 'color-positive', 'color-notice', 'red-5', 'deep-orange-5', 'orange-5', 'amber-5', 'yellow-5', 'green-5', 'teal-5', 'cyan-5', 'blue-5', 'deep-purple-5', 'purple-5', 'pinkish-red-5', 'font-size-body-small', 'font-size-body-medium', 'size-static-6', 'size-2x', 'size-static-20', 'spacing-tight', 'spacing-extra-tight', 'spacing-slightly-tight', 'border-radius-circle'],
  component: genToken(defaultToken)
};