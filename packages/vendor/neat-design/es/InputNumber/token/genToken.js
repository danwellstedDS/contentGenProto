/**
 * @file genToken.ts
 * @author pipi(peter.rao@derbysoft.net)
 */

// Types

export default function genToken(token) {
  return {
    /**
     * Color
     */
    'input-color-text': token['color-text-primary'],
    'input-color-text-secondary': token['color-text-secondary'],
    'input-color-text-placeholder': token['color-text-placeholder'],
    'input-color-text-disabled': token['color-text-disabled'],
    'input-color-text-danger': token['color-text-negative'],
    'input-color-icon': token['color-icon'],
    'input-color-icon-hover': token['color-primary'],
    'input-color-icon-press': token['color-primary-press'],
    'input-color-icon-disabled': token['color-text-disabled'],
    'input-color-bg': token['color-bg'],
    'input-color-bg-hover': token['color-bg'],
    'input-color-bg-disabled': token['color-bg-disabled'],
    'input-color-border': token['color-border'],
    'input-color-border-hover': token['color-primary'],
    'input-color-border-press': token['color-primary-press'],
    'input-color-border-disabled': token['color-border-disabled'],
    'input-color-border-danger': token['color-negative'],
    /**
     * Font Size
     */
    'input-font-size-small': token['font-size-body-medium'],
    'input-font-size-medium': token['font-size-body-medium'],
    'input-font-size-large': token['font-size-body-large'],
    /**
     * Size
     */
    'input-size-small': token['size-4x'],
    'input-size-medium': token['size-5x'],
    'input-size-large': token['size-6x'],
    'input-size-icon-small': token['size-2x'],
    'input-size-icon-medium': token['size-static-20'],
    'input-size-icon-large': token['size-3x'],
    'input-size-close-btn-small': token['size-2x'],
    'input-size-close-btn-medium': token['size-2x'],
    'input-size-close-btn-large': token['size-static-18'],
    'input-textarea-size-small': token['size-7x'],
    'input-textarea-size-medium': token['size-8x'],
    'input-textarea-size-large': token['size-9x'],
    'input-size-handle-arrow-small': token['size-static-12'],
    'input-size-handle-arrow-medium': token['size-static-12'],
    'input-size-handle-arrow-large': token['size-2x'],
    /**
     * Spacing
     */
    'input-gap': token['spacing-tight'],
    'input-padding-h': token['spacing-base-tight'],
    /**
     * Border Radius
     */
    'input-border-radius': token['border-radius-base'],
    /**
     * Shadow
     * (no docs)
     */
    'input-focus-shadow': token['shadow-focus'],
    'input-focus-negative-shadow': token['shadow-focus-negative']
  };
}