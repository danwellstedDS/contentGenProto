/**
 * @file ModalTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['color-text-primary', 'color-bg', 'color-border-divider', 'font-size-header-4', 'font-size-body-medium', 'size-75x', 'size-50x', 'size-120x', 'size-7x', 'size-3x', 'spacing-base', 'spacing-loose', 'spacing-tight', 'border-radius-base'],
  component: genToken(defaultToken)
};