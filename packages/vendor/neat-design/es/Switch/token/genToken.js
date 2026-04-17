/**
 * @file genToken.ts
 * @author pipi(peter.rao@derbysoft.net)
 */

// Statics
import { ladderColor } from '@derbysoft/neat-design-token';

// Types

export default function genToken(token) {
  return {
    /**
     * Color
     */
    'switch-color-fill-off': token['color-primary'],
    'switch-color-fill-off-hover': token['color-primary-hover'],
    'switch-color-fill-off-focus': token['color-primary-focus'],
    'switch-color-fill-off-press': token['color-primary-press'],
    'switch-color-fill-off-disabled': token['color-bg-on-disabled'],
    'switch-color-fill-on': token['color-bg'],
    'switch-color-bg-off': token['color-bg'],
    'switch-color-bg-on': token['color-primary'],
    'switch-color-bg-on-hover': token['color-primary-hover'],
    'switch-color-bg-on-focus': token['color-primary-focus'],
    'switch-color-bg-on-press': token['color-primary-press'],
    'switch-color-bg-on-loading': token['color-primary'],
    'switch-color-bg-on-disabled': token['color-bg-on-disabled'],
    'switch-color-bg-off-hover': ladderColor['neutral-9'],
    'switch-color-bg-off-focus': ladderColor['neutral-11'],
    'switch-color-bg-off-press': ladderColor['neutral-9'],
    'switch-color-bg-off-loading': ladderColor['neutral-11'],
    'switch-color-bg-off-disabled': ladderColor['neutral-7'],
    'switch-color-border-off': ladderColor['neutral-15'],
    'switch-color-border-off-focus': token['color-primary'],
    'switch-color-border-off-loading': token['color-primary'],
    'switch-color-border-off-disabled': token['color-bg-on-disabled'],
    /**
     * Font Size
     */

    /**
     * Size
     */
    'switch-size-v-small': token['size-2x'],
    'switch-size-h-small': token['size-4x'],
    'switch-size-v-medium': token['size-static-20'],
    'switch-size-h-medium': token['size-5x'],
    'switch-size-v-large': token['size-3x'],
    'switch-size-h-large': token['size-6x'],
    'switch-size-fill-small': token['size-static-12'],
    'switch-size-fill-medium': token['size-static-14'],
    'switch-size-fill-large': token['size-2x'],
    'switch-size-fill-press-small': token['size-2x'],
    'switch-size-fill-press-medium': token['size-static-20'],
    'switch-size-fill-press-large': token['size-3x'],
    /**
     * Spacing
     */
    'switch-padding-small': token['spacing-super-tight'],
    'switch-padding-medium': 3,
    'switch-padding-large': token['spacing-extra-tight']
  };
}