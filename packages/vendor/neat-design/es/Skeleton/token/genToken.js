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
    'skeleton-color-bg': token['color-bg-enhance'],
    'skeleton-color-animation-dark': token['neutral-5'],
    /**
     * Spacing
     */
    'skeleton-gap-h-notifications-medium': token['spacing-base'],
    'skeleton-gap-h-notifications-small': token['spacing-base-tight'],
    'skeleton-gap-h-notifications-large': token['spacing-base-loose'],
    'skeleton-gap-v-notifications-medium': token['spacing-tight'],
    'skeleton-gap-v-notifications-small': token['spacing-slightly-tight'],
    'skeleton-gap-v-notifications-large': token['spacing-base-tight'],
    'skeleton-gap-v-menu': token['spacing-tight'],
    'skeleton-gap-h-content': token['spacing-base'],
    'skeleton-padding-container': token['spacing-extra-loose'],
    'skeleton-padding-h-menu': token['spacing-base-tight'],
    'skeleton-padding-h-table': token['spacing-base'],
    /**
     * Border Radius
     */
    'skeleton-border-radius': token['border-radius-small'],
    /**
     * Size
     */
    'skeleton-size-icon-medium': token['size-static-20'],
    'skeleton-size-icon-small': token['size-2x'],
    'skeleton-size-icon-large': token['size-3x'],
    'skeleton-size-avatar-medium': token['size-5x'],
    'skeleton-size-avatar-small': token['size-4x'],
    'skeleton-size-avatar-large': token['size-8x'],
    'skeleton-size-h-button-medium': token['size-17x'],
    'skeleton-size-h-button-small': token['size-17x'],
    'skeleton-size-h-button-large': token['size-22x'],
    'skeleton-size-v-button-medium': token['size-5x'],
    'skeleton-size-v-button-small': token['size-4x'],
    'skeleton-size-v-button-large': token['size-6x'],
    'skeleton-size-block-medium': token['size-static-20'],
    'skeleton-size-block-small': token['size-2x'],
    'skeleton-size-block-large': token['size-3x'],
    'skeleton-size-v-title-box-medium': token['size-5x'],
    'skeleton-size-v-title-box-small': token['size-4x'],
    'skeleton-size-v-title-box-large': token['size-8x'],
    'skeleton-size-v-text-medium': token['size-static-14'],
    'skeleton-size-v-text-small': token['size-static-12'],
    'skeleton-size-v-text-large': token['size-2x'],
    'skeleton-size-v-paragraph-medium': token['size-3x'],
    'skeleton-size-v-paragraph-small': token['size-static-20'],
    'skeleton-size-v-paragraph-large': token['size-static-28'],
    'skeleton-size-v-menu': token['size-5x'],
    'skeleton-size-v-content': token['size-3x'],
    'skeleton-size-table-medium': token['size-6x'],
    'skeleton-size-table-small': token['size-static-36'],
    'skeleton-size-table-large': token['size-8x']
  };
}