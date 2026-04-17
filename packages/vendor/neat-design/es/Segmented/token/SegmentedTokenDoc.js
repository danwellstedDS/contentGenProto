/**
 * @file SegmentedTokenDoc.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Statics
import { defaultToken } from '@derbysoft/neat-design-token';

// Vendors
import genToken from "./genToken";
export default {
  global: ['neutral-23', 'color-primary', 'color-primary-press', 'color-text-disabled', 'color-icon', 'color-icon-disabled', 'color-bg', 'color-bg-raised', 'neutral-1', 'neutral-2', 'color-bg-disabled', 'color-border-divider', 'font-size-body-small', 'font-size-body-medium', 'font-size-body-large', 'line-height-static-16', 'line-height-static-20', 'line-height-static-24', 'size-3x', 'size-4x', 'size-5x', 'size-6x', 'size-static-12', 'size-2x', 'size-static-20', 'spacing-super-tight', 'spacing-extra-tight', 'spacing-slightly-tight', 'spacing-tight', 'spacing-base', 'spacing-loose', 'spacing-extra-loose', 'spacing-base-tight', 'spacing-base-loose', 'border-radius-small', 'border-radius-base'],
  component: genToken(defaultToken)
};