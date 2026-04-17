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
    'timepicker-color-text': token['color-text-primary'],
    'timepicker-color-text-selected': token['color-primary'],
    'timepicker-color-text-secondary': token['color-text-secondary'],
    'timepicker-color-text-inverse': token['color-text-inverse'],
    'timepicker-color-text-disabled': token['color-text-disabled'],
    'timepicker-color-bg': token['color-bg'],
    'timepicker-color-bg-hover': token['color-bg-hover'],
    'timepicker-color-bg-selected': token['color-bg-hover'],
    'timepicker-color-bg-selected-hover': token['color-bg-press'],
    'timepicker-color-bg-disabled': token['color-bg-disabled'],
    'timepicker-color-divider': token['color-border-divider'],
    /**
     * Font Size
     */
    'timepicker-font-size': token['font-size-body-medium'],
    /**
     * Size
     */
    'timepicker-size-item-v': token['size-4x'],
    'timepicker-size-item-h': token['size-8x'],
    /**
     * Spacing
     */
    'timepicker-gap': token['spacing-tight'],
    'timepicker-padding-h': token['spacing-base-tight'],
    'timepicker-padding-v': token['spacing-base'],
    /**
     * Border Radius
     */
    'timepicker-border-radius-item': token['border-radius-small']
  };
}