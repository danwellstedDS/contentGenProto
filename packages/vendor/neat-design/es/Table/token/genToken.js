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
    'table-color-text': token['color-text-primary'],
    'table-color-text-secondary': token['color-text-secondary'],
    'table-color-text-disabled': token['color-text-disabled'],
    'table-color-text-link': token['color-text-link'],
    'table-color-text-link-hover': token['color-text-link-hover'],
    'table-color-text-link-press': token['color-text-link-press'],
    'table-color-text-link-disabled': token['color-text-link-disabled'],
    'table-color-icon': token['color-icon'],
    'table-color-icon-hover': token['color-primary'],
    'table-color-icon-disabled': token['color-icon-disabled'],
    'table-color-btn-hover': token['color-primary-enhance'],
    'table-color-bg': token['color-bg'],
    'table-color-bg-hover': token['color-bg-hover'],
    'table-color-bg-active': token['color-bg-enhance'],
    'table-color-bg-disabled': token['color-bg-disabled'],
    'table-color-bg-header': token['color-bg'],
    'table-color-bg-header-hover': token['color-bg-hover'],
    'table-color-bg-footer': token['color-bg-enhance'],
    'table-color-bg-footer-hover': token['color-bg-hover'],
    'table-color-bg-zebra': token['color-bg-sunken'],
    'table-color-border': token['color-border-divider'],
    /**
     * Font Size
     */
    'table-font-size-small': token['font-size-body-small'],
    'table-font-size-medium': token['font-size-body-medium'],
    'table-font-size-large': token['font-size-body-large'],
    'table-avatar-font-size-small': token['font-size-body-small'],
    'table-avatar-font-size-medium': token['font-size-body-medium'],
    'table-avatar-font-size-large': token['font-size-body-extra-large'],
    /**
     * Line Height
     */
    'table-line-height-small': token['line-height-static-16'],
    'table-line-height-medium': token['line-height-static-20'],
    'table-line-height-large': token['line-height-static-24'],
    /**
     * Size
     */
    'table-size-small': token['size-static-36'],
    'table-size-medium': token['size-6x'],
    'table-size-large': token['size-8x'],
    'table-size-arrow-small': token['size-2x'],
    'table-size-arrow-medium': token['size-2x'],
    'table-size-arrow-large': token['size-static-20'],
    'table-element-size-small': token['size-3x'],
    'table-element-size-medium': token['size-4x'],
    'table-element-size-large': token['size-5x'],
    'table-element-size-icon-small': token['size-2x'],
    'table-element-size-icon-medium': token['size-static-20'],
    'table-element-size-icon-large': token['size-3x'],
    /**
     * Spacing
     */
    'table-gap': token['spacing-tight'],
    'table-padding-h': token['spacing-base'],
    'table-button-padding-h-small': token['spacing-tight'],
    'table-button-padding-h-medium': token['spacing-tight'],
    'table-button-padding-h-large': token['spacing-base'],
    'table-padding-v-small': token['spacing-slightly-tight'],
    'table-padding-v-medium': token['spacing-tight'],
    'table-padding-v-large': token['spacing-base-tight']
  };
}