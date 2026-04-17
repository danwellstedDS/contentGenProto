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
    'pagination-color-text': token['color-text-primary'],
    'pagination-color-text-secondary': token['color-text-secondary'],
    'pagination-color-text-hover': token['color-primary'],
    'pagination-color-text-press': token['color-primary-press'],
    'pagination-color-text-disabled': token['color-text-disabled'],
    'pagination-color-icon': token['color-icon'],
    'pagination-color-icon-hover': token['color-primary'],
    'pagination-color-icon-press': token['color-primary-press'],
    'pagination-color-icon-disabled': token['color-icon-disabled'],
    'pagination-color-bg-hover': token['color-bg-flat'],
    'pagination-color-bg-active': token['color-bg-disabled'],
    /**
     * Font Size
     */
    'pagination-font-size-small': token['font-size-body-small'],
    'pagination-font-size-medium': token['font-size-body-medium'],
    /**
     * Line Height
     */
    'pagination-line-height-small': token['line-height-static-16'],
    'pagination-line-height-medium': token['line-height-static-20'],
    /**
     * Size
     */
    'pagination-size-small': token['size-3x'],
    'pagination-size-medium': token['size-4x'],
    'pagination-size-icon-small': token['size-static-12'],
    'pagination-size-icon-medium': token['size-2x'],
    /**
     * Spacing
     */
    'pagination-gap': token['spacing-tight'],
    'pagination-padding-h': token['spacing-slightly-tight'],
    /**
     * Border Radius
     */
    'pagination-border-radius-small': token['border-radius-small'],
    'pagination-border-radius-medium': token['border-radius-base']
  };
}