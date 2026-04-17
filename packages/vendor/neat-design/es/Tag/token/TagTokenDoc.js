/**
 * @file TagTokenDoc.ts
 * @author sunday(sunday.wei@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['color-icon-disabled', 'color-bg-disabled', 'color-bg-raised', 'color-text-disabled', 'color-text-inverse', 'color-icon-inverse', 'blue-1', 'blue-2', 'blue-6', 'blue-8', 'green-1', 'green-2', 'green-6', 'green-8', 'orange-1', 'orange-2', 'orange-6', 'orange-8', 'amber-1', 'amber-2', 'amber-6', 'amber-8', 'red-1', 'red-2', 'red-6', 'red-8', 'pinkish-red-1', 'pinkish-red-2', 'pinkish-red-6', 'pinkish-red-8', 'purple-1', 'purple-2', 'purple-6', 'purple-8', 'cyan-1', 'cyan-2', 'cyan-6', 'cyan-8', 'neutral-3', 'neutral-5', 'neutral-17', 'color-text-primary', 'color-bg-on-disabled', 'blue-9', 'green-9', 'orange-9', 'amber-9', 'red-9', 'pinkish-red-9', 'purple-9', 'cyan-9', 'neutral-23', 'neutral-19', 'color-bg-sunken', 'color-bg', 'neutral-2', 'color-text-secondary', 'color-border', 'color-primary', 'color-icon', 'font-size-body-small', 'font-size-body-medium', 'line-height-static-16', 'line-height-static-20', 'size-2x', 'size-static-18', 'spacing-extra-tight', 'spacing-slightly-tight', 'spacing-tight', 'spacing-base-tight'],
  component: genToken(defaultToken)
};