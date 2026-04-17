/**
 * @file genToken.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics

// Types

export default function genToken(token) {
  return {
    /**
     * Color
     */
    'button-color-bg-primary': token['color-primary'],
    'button-color-bg-primary-hover': token['color-primary-hover'],
    'button-color-bg-primary-press': token['color-primary-press'],
    'button-color-bg-primary-focus': token['color-primary-focus'],
    'button-color-bg-primary-active': token['color-primary'],
    'button-color-bg-primary-disabled': token['color-bg-disabled'],
    'button-color-bg-primary-danger': token['color-negative'],
    'button-color-bg-primary-danger-hover': token['color-negative-hover'],
    'button-color-bg-primary-danger-press': token['color-negative-press'],
    'button-color-bg-primary-danger-focus': token['color-negative-focus'],
    'button-color-bg-primary-danger-active': token['red-7'],
    'button-color-bg-secondary': token['color-bg'],
    'button-color-bg-secondary-hover': token['neutral-1'],
    'button-color-bg-secondary-press': token['neutral-2'],
    'button-color-bg-secondary-focus': token['neutral-2'],
    'button-color-bg-secondary-active': token['neutral-2'],
    'button-color-bg-secondary-danger': token['color-bg'],
    'button-color-bg-secondary-danger-hover': token['color-negative-sunken'],
    'button-color-bg-secondary-danger-press': token['color-negative-sunken'],
    'button-color-bg-secondary-danger-focus': token['color-negative-sunken'],
    'button-color-bg-secondary-danger-active': token['color-negative-sunken'],
    'button-color-bg-tertiary-hover': token['neutral-1'],
    'button-color-bg-tertiary-press': token['neutral-2'],
    'button-color-bg-tertiary-focus': token['color-bg'],
    'button-color-bg-tertiary-active': token['neutral-2'],
    'button-color-bg-tertiary-danger-hover': token['color-negative-sunken'],
    'button-color-bg-tertiary-danger-press': token['red-1'],
    'button-color-bg-tertiary-danger-focus': token['color-bg'],
    'button-color-bg-tertiary-danger-active': token['red-1'],
    'button-color-border-secondary': token['color-primary'],
    'button-color-border-secondary-press': token['color-primary-press'],
    'button-color-border-secondary-focus': token['color-primary-focus'],
    'button-color-border-secondary-active': token['color-primary'],
    'button-color-border-secondary-disabled': token['color-border-disabled'],
    'button-color-border-secondary-danger': token['color-negative'],
    'button-color-border-secondary-danger-press': token['color-negative-press'],
    'button-color-border-secondary-danger-focus': token['color-negative-focus'],
    'button-color-border-secondary-danger-active': token['red-7'],
    'button-color-icon-disabled': token['color-icon-disabled'],
    'button-color-icon-primary': token['color-icon-inverse'],
    'button-color-icon-secondary': token['color-primary'],
    'button-color-icon-secondary-press': token['color-primary-press'],
    'button-color-icon-secondary-focus': token['color-primary-focus'],
    'button-color-icon-secondary-active': token['color-primary'],
    'button-color-icon-secondary-danger': token['color-negative'],
    'button-color-icon-secondary-danger-press': token['color-negative-press'],
    'button-color-icon-secondary-danger-focus': token['color-negative-focus'],
    'button-color-icon-secondary-danger-active': token['red-7'],
    'button-color-icon-tertiary': token['color-primary'],
    'button-color-icon-tertiary-press': token['color-primary-press'],
    'button-color-icon-tertiary-focus': token['color-primary-focus'],
    'button-color-icon-tertiary-active': token['color-primary'],
    'button-color-icon-tertiary-danger': token['color-negative'],
    'button-color-icon-tertiary-danger-press': token['color-negative-press'],
    'button-color-icon-tertiary-danger-focus': token['color-negative-focus'],
    'button-color-icon-tertiary-danger-active': token['red-7'],
    'button-color-icon-tertiary-inline': token['blue-6'],
    'button-color-icon-tertiary-inline-focus': token['blue-7'],
    'button-color-icon-tertiary-inline-press': token['blue-8'],
    'button-color-icon-tertiary-inline-active': token['blue-6'],
    'button-color-text-disabled': token['color-text-disabled'],
    'button-color-text-primary': token['color-text-inverse'],
    'button-color-text-secondary': token['color-primary'],
    'button-color-text-secondary-press': token['color-primary-press'],
    'button-color-text-secondary-focus': token['color-primary-focus'],
    'button-color-text-secondary-active': token['color-primary'],
    'button-color-text-secondary-danger': token['color-negative'],
    'button-color-text-secondary-danger-press': token['color-negative-press'],
    'button-color-text-secondary-danger-focus': token['color-negative-focus'],
    'button-color-text-secondary-danger-active': token['red-7'],
    'button-color-text-tertiary': token['color-primary'],
    'button-color-text-tertiary-press': token['color-primary-press'],
    'button-color-text-tertiary-focus': token['color-primary-focus'],
    'button-color-text-tertiary-active': token['color-primary'],
    'button-color-text-inline': token['color-primary'],
    'button-color-text-inline-press': token['color-primary-press'],
    'button-color-text-inline-focus': token['color-primary-focus'],
    'button-color-text-inline-active': token['color-primary'],
    'button-color-text-tertiary-inline': token['blue-6'],
    'button-color-text-tertiary-inline-focus': token['blue-7'],
    'button-color-text-tertiary-inline-press': token['blue-8'],
    'button-color-text-tertiary-inline-active': token['blue-6'],
    'button-color-text-tertiary-danger': token['color-negative'],
    'button-color-text-tertiary-danger-press': token['color-negative-press'],
    'button-color-text-tertiary-danger-focus': token['color-negative-focus'],
    'button-color-text-tertiary-danger-active': token['red-7'],
    'button-color-text-link': token['color-info'],
    'button-color-text-link-hover': token['color-info-hover'],
    'button-color-text-link-focus': token['color-info-focus'],
    'button-color-text-link-press': token['color-info-press'],
    /**
     * Font
     */
    'button-font-link-small': token['font-size-body-small'],
    'button-font-link-medium': token['font-size-body-medium'],
    'button-font-link-large': token['font-size-body-large'],
    'button-font-small': token['font-size-body-medium'],
    'button-font-medium': token['font-size-body-medium'],
    'button-font-large': token['font-size-body-large'],
    /**
     * Line Height
     */
    'button-line-height-small': token['line-height-static-20'],
    'button-line-height-medium': token['line-height-static-20'],
    'button-line-height-large': token['line-height-static-24'],
    /**
     * Size
     */
    'button-size-small': token['size-4x'],
    'button-size-medium': token['size-5x'],
    'button-size-large': token['size-6x'],
    'button-size-inline-small': token['size-3x'],
    'button-size-inline-medium': token['size-4x'],
    'button-size-inline-large': token['size-5x'],
    'button-size-icon-small': token['size-2x'],
    'button-size-icon-medium': token['size-2x'],
    'button-size-icon-large': token['size-static-18'],
    'button-size-icon-only-small': token['size-2x'],
    'button-size-icon-only-medium': token['size-static-18'],
    'button-size-icon-only-large': token['size-static-20'],
    'button-size-icon-inline-small': token['size-static-14'],
    'button-size-icon-inline-medium': token['size-static-14'],
    'button-size-icon-inline-large': token['size-2x'],
    'button-size-load-inline-small': token['size-static-14'],
    'button-size-load-inline-medium': token['size-static-14'],
    'button-size-load-inline-large': token['size-2x'],
    'button-size-load-small': token['size-2x'],
    'button-size-load-medium': token['size-2x'],
    'button-size-load-large': token['size-static-18'],
    'button-size-load-only-small': token['size-2x'],
    'button-size-load-only-medium': token['size-static-18'],
    'button-size-load-only-large': token['size-static-20'],
    /**
     * Border Radius
     */
    'button-border-radius-small': token['border-radius-small'],
    'button-border-radius-medium': token['border-radius-base'],
    'button-border-radius-large': token['border-radius-base'],
    'button-border-radius-inline-small': token['border-radius-small'],
    'button-border-radius-inline-medium': token['border-radius-small'],
    'button-border-radius-inline-large': token['border-radius-base'],
    /**
     * Spacing
     */
    'button-padding-h-small': token['spacing-base'],
    'button-padding-h-medium': token['spacing-base'],
    'button-padding-h-large': token['spacing-base-loose'],
    'button-padding-inline-h-small': token['spacing-tight'],
    'button-padding-inline-h-medium': token['spacing-tight'],
    'button-padding-inline-h-large': token['spacing-base'],
    'button-gap': token['spacing-tight']
  };
}