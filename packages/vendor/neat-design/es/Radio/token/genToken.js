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
    'radio-color-bg-off': token['color-bg'],
    'radio-color-bg-off-disabled': token['color-bg-disabled'],
    'radio-color-bg-on': token['color-primary'],
    'radio-color-bg-on-hover': token['color-primary-hover'],
    'radio-color-bg-on-focus': token['color-primary-focus'],
    'radio-color-bg-on-press': token['color-primary-press'],
    'radio-color-bg-on-disabled': token['color-bg-on-disabled'],
    'radio-color-bg-on-danger': token['color-negative'],
    'radio-color-fill-on': token['color-bg'],
    'radio-color-border-off': token['color-border-enhance'],
    'radio-color-border-hover': token['color-border-enhance'],
    'radio-color-border-focus': token['color-border-enhance'],
    'radio-color-border-press': token['color-border-enhance'],
    'radio-color-border-off-disabled': token['color-bg-on-disabled'],
    'radio-color-border-off-danger': token['color-negative'],
    'radio-color-text': token['color-text-primary'],
    'radio-color-text-disabled': token['color-text-disabled'],
    /**
     * Font Size
     */
    'radio-font-size-small': token['font-size-body-small'],
    'radio-font-size-medium': token['font-size-body-medium'],
    'radio-font-size-large': token['font-size-body-large'],
    /**
     * Line Height
     */
    'radio-line-height-small': token['line-height-static-16'],
    'radio-line-height-medium': token['line-height-static-20'],
    'radio-line-height-large': token['line-height-static-24'],
    /**
     * Size
     */
    'radio-size-small': token['size-static-14'],
    'radio-size-medium': token['size-2x'],
    'radio-size-large': token['size-static-20'],
    'checkbox-size-group-small': token['size-4x'],
    'checkbox-size-group-medium': token['size-5x'],
    'checkbox-size-group-large': token['size-6x'],
    'radio-fill-small': token['size-base'],
    'radio-fill-medium': token['size-static-10'],
    'radio-fill-large': token['size-static-12'],
    /**
     * Spacing
     */
    'radio-gap': token['spacing-tight'],
    'radio-gap-group-h-small': token['spacing-super-loose'],
    'radio-gap-group-v-small': token['spacing-base'],
    'radio-gap-group-h-medium': token['spacing-super-loose'],
    'radio-gap-group-v-medium': token['spacing-super-loose'],
    'radio-gap-group-h-large': token['spacing-super-loose'],
    'radio-gap-group-v-large': token['spacing-loose'],
    'radio-padding-group-v-small': token['spacing-tight'],
    'radio-padding-group-v-medium': token['spacing-static-10'],
    'radio-padding-group-v-large': token['spacing-base-tight'],
    /**
     * Border Radius
     */
    'radio-border-radius': token['border-radius-circle']
  };
}