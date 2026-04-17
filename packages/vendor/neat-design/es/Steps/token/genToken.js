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
    'steps-color-default': token['color-primary'],
    'steps-color-hover': token['color-primary-hover'],
    'steps-color-error': token['color-negative'],
    'steps-color-success': token['color-positive'],
    'steps-color-disabled': token['color-icon-secondary-disabled'],
    'steps-color-inverse': token['color-icon-inverse'],
    'steps-color-text': token['color-text-primary'],
    'steps-color-text-secondary': token['color-text-secondary'],
    'steps-color-text-disabled': token['color-text-disabled'],
    'steps-color-text-inverse': token['color-text-inverse'],
    'steps-color-bg': token['color-info-sunken'],
    'steps-color-bg-hover': token['color-info-enhance'],
    'steps-color-bg-disabled': token['color-bg-sunken'],
    'steps-color-bg-disabled-hover': token['color-bg-enhance'],
    'steps-color-bg-finish': token['color-positive-sunken'],
    'steps-color-bg-finish-hover': token['color-positive-enhance'],
    'steps-color-bg-error': token['color-negative-sunken'],
    'steps-color-bg-error-hover': token['color-negative-enhance'],
    'steps-color-border': token['color-border-disabled'],
    'steps-color-border-finish': token['color-border-hover'],
    'steps-color-border-error': token['color-negative'],
    'steps-color-border-disabled': token['color-border-disabled'],
    /**
     * Font Size
     */
    'steps-font-size-medium': token['font-size-body-large'],
    'steps-font-size-small': token['font-size-body-medium'],
    'steps-font-size-description-medium': token['font-size-body-medium'],
    'steps-font-size-description-small': token['font-size-body-small'],
    /**
     * Size
     */
    'steps-size-dot': token['size-base'],
    'steps-size-medium': token['size-8x'],
    'steps-size-small': token['size-6x'],
    'steps-size-icon-medium': token['size-4x'],
    'steps-size-icon-small': token['size-3x'],
    'steps-size-title-medium': token['size-4x'],
    'steps-size-title-small': token['size-3x'],
    /**
     * Spacing
     */
    'steps-basic-gap': token['spacing-tight'],
    'steps-gap-medium': token['spacing-base'],
    'steps-gap-small': token['spacing-tight'],
    'steps-gap-inline': token['spacing-tight'],
    'steps-gap-item-medium': token['spacing-base'],
    'steps-gap-item-small': token['spacing-tight'],
    'steps-padding-medium': token['spacing-loose'],
    'steps-padding-small': token['spacing-base']
  };
}