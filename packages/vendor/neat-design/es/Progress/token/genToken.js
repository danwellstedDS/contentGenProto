/**
 * @file genToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default function genToken(token) {
  return {
    /**
     * Color
     */
    'progress-color-text': token['color-text-primary'],
    'progress-color-text-inverse': token['color-text-inverse'],
    'progress-color-bg-empty': token['color-bg-enhance'],
    'progress-color-bg-filled': token['color-info'],
    'progress-color-success': token['color-positive'],
    'progress-color-fail': token['color-negative'],
    'progress-color-icon-inverse': token['color-icon-inverse'],
    /**
     * Font Size
     */
    'progress-font-size-small': token['font-size-body-small'],
    'progress-font-size-medium': token['font-size-body-medium'],
    'progress-font-size-large': token['font-size-body-large'],
    /**
     * Line Height
     */
    'progress-line-height-small': token['line-height-static-16'],
    'progress-line-height-medium': token['line-height-static-20'],
    'progress-line-height-large': token['line-height-static-24'],
    /**
     * Size
     */
    'progress-size-bar-item-small': token['size-static-4'],
    'progress-size-bar-item-medium': token['size-static-6'],
    'progress-size-bar-item-large': token['size-base'],
    'progress-size-bar-v-small': token['size-2x'],
    'progress-size-bar-v-medium': token['size-static-20'],
    'progress-size-bar-v-large': token['size-3x'],
    'progress-size-ring-border-mini': token['size-static-4'],
    'progress-size-ring-border-small': token['size-static-4'],
    'progress-size-ring-border-medium': token['size-static-6'],
    'progress-size-ring-border-large': token['size-base'],
    'progress-size-bold-weight-small': token['size-2x'],
    'progress-size-bold-weight-medium': token['size-static-20'],
    'progress-size-bold-weight-large': token['size-3x'],
    'progress-size-icon-small': token['size-2x'],
    'progress-size-icon-medium': token['size-static-20'],
    'progress-size-icon-large': token['size-3x'],
    'progress-size-icon-bold-small': token['size-static-12'],
    'progress-size-icon-bold-medium': token['size-2x'],
    'progress-size-icon-bold-large': token['size-static-20'],
    'progress-size-label-h-small': token['size-4x'],
    'progress-size-label-h-medium': token['size-static-36'],
    'progress-size-label-h-large': token['size-5x'],
    'progress-size-ring-mini': token['size-3x'],
    'progress-size-ring-small': token['size-6x'],
    'progress-size-ring-medium': token['size-10x'],
    'progress-size-ring-large': token['size-15x'],
    /**
     * Spacing
     */
    'progress-gap-bar-small': token['spacing-static-10'],
    'progress-gap-bar-medium': token['spacing-base-tight'],
    'progress-gap-bar-large': token['spacing-base-tight'],
    'progress-padding-icon-bold': token['spacing-super-tight'],
    'progress-padding-bold-label-small': token['spacing-extra-tight'],
    'progress-padding-bold-label-medium': token['spacing-slightly-tight'],
    'progress-padding-bold-label-large': token['spacing-tight'],
    /**
     * Border Radius
     */
    'progress-border-radius': token['border-radius-circle']
  };
}