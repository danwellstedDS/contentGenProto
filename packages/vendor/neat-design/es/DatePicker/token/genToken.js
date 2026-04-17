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
    'datepicker-color-text': token['color-text-primary'],
    'datepicker-color-text-secondary': token['color-text-secondary'],
    'datepicker-color-text-inverse': token['color-text-inverse'],
    'datepicker-color-text-disabled': token['color-text-disabled'],
    'datepicker-color-bg': token['color-bg'],
    'datepicker-color-bg-hover': token['color-bg-hover'],
    'datepicker-color-bg-hover-enhance': token['color-bg-press'],
    'datepicker-color-bg-compared-hover': token['amber-1'],
    'datepicker-color-bg-compared-hover-enhance': token['amber-2'],
    'datepicker-color-bg-overlap-hover': token['green-1'],
    'datepicker-color-bg-overlap-hover-enhance': token['green-2'],
    'datepicker-color-bg-selected': token['color-primary'],
    'datepicker-color-bg-selected-hover': token['color-primary-hover'],
    'datepicker-color-bg-selected-secondary': token['color-bg-hover'],
    'datepicker-color-bg-compared-selected': token['color-notice'],
    'datepicker-color-bg-compared-selected-hover': token['color-notice-hover'],
    'datepicker-color-bg-compared-selected-secondary': token['amber-1'],
    'datepicker-color-bg-overlap-selected': token['color-positive'],
    'datepicker-color-bg-overlap-selected-hover': token['color-positive-hover'],
    'datepicker-color-bg-overlap-selected-secondary': token['green-1'],
    'datepicker-color-bg-disabled': token['color-bg-disabled'],
    'datepicker-color-bg-disabled-enhance': token['color-bg-raised'],
    'datepicker-color-border': token['color-primary'],
    'datepicker-color-border-compared': token['color-notice'],
    'datepicker-color-border-overlap': token['color-positive'],
    'datepicker-color-border-selected': token['color-primary-enhance'],
    'datepicker-color-border-compared-selected': token['color-notice-enhance'],
    'datepicker-color-border-overlap-selected': token['color-positive-enhance'],
    'datepicker-color-border-disabled': token['color-border-disabled'],
    'datepicker-color-border-disabled-enhance': token['color-border'],
    'datepicker-color-icon': token['color-icon'],
    'datepicker-color-divider': token['color-border-divider'],
    /**
     * Font
     */
    'datepicker-font-size': token['font-size-body-medium'],
    /**
     * Size
     */
    'datepicker-size-item-1': token['size-4x'],
    'datepicker-size-item-2': token['size-6x'],
    'datepicker-size-item-3': token['size-8x'],
    /**
     * Spacing
     */
    'datepicker-gap': token['spacing-tight'],
    'datepicker-padding-h': token['spacing-base-tight'],
    /**
     * Border Radius
     */
    'datepicker-border-radius-item': token['border-radius-small'],
    'datepicker-border-radius': token['border-radius-base']
  };
}