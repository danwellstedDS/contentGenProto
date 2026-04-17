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
    'tag-color-icon-disabled': token['color-icon-disabled'],
    /**
     * Light Color
     */
    'tag-color-bg-light-disabled': token['color-bg-disabled'],
    'tag-color-bg-light-disabled-raised': token['color-bg-raised'],
    'tag-color-text-light-disabled': token['color-text-disabled'],
    'tag-color-text-light-active': token['color-text-inverse'],
    'tag-color-icon-light-active': token['color-icon-inverse'],
    // Blue
    'tag-color-bg-light-blue': token['blue-1'],
    'tag-color-bg-light-blue-hover': token['blue-2'],
    'tag-color-bg-light-blue-active': token['blue-6'],
    'tag-color-text-light-blue': token['blue-8'],
    'tag-color-icon-light-blue': token['blue-8'],
    // Green
    'tag-color-bg-light-green': token['green-1'],
    'tag-color-bg-light-green-hover': token['green-2'],
    'tag-color-bg-light-green-active': token['green-6'],
    'tag-color-text-light-green': token['green-8'],
    'tag-color-icon-light-green': token['green-8'],
    // Orange
    'tag-color-bg-light-orange': token['orange-1'],
    'tag-color-bg-light-orange-hover': token['orange-2'],
    'tag-color-bg-light-orange-active': token['orange-6'],
    'tag-color-text-light-orange': token['orange-8'],
    'tag-color-icon-light-orange': token['orange-8'],
    // Amber
    'tag-color-bg-light-amber': token['amber-1'],
    'tag-color-bg-light-amber-hover': token['amber-2'],
    'tag-color-bg-light-amber-active': token['amber-6'],
    'tag-color-text-light-amber': token['amber-8'],
    'tag-color-icon-light-amber': token['amber-8'],
    // Red
    'tag-color-bg-light-red': token['red-1'],
    'tag-color-bg-light-red-hover': token['red-2'],
    'tag-color-bg-light-red-active': token['red-6'],
    'tag-color-text-light-red': token['red-8'],
    'tag-color-icon-light-red': token['red-8'],
    // Pink
    'tag-color-bg-light-pink': token['pinkish-red-1'],
    'tag-color-bg-light-pink-hover': token['pinkish-red-2'],
    'tag-color-bg-light-pink-active': token['pinkish-red-6'],
    'tag-color-text-light-pink': token['pinkish-red-8'],
    'tag-color-icon-light-pink': token['pinkish-red-8'],
    // Purple
    'tag-color-bg-light-purple': token['purple-1'],
    'tag-color-bg-light-purple-hover': token['purple-2'],
    'tag-color-bg-light-purple-active': token['purple-6'],
    'tag-color-text-light-purple': token['purple-8'],
    'tag-color-icon-light-purple': token['purple-8'],
    // Cyan
    'tag-color-bg-light-cyan': token['cyan-1'],
    'tag-color-bg-light-cyan-hover': token['cyan-2'],
    'tag-color-bg-light-cyan-active': token['cyan-6'],
    'tag-color-text-light-cyan': token['cyan-8'],
    'tag-color-icon-light-cyan': token['cyan-8'],
    // Neutral
    'tag-color-bg-light-neutral': token['neutral-3'],
    'tag-color-bg-light-neutral-hover': token['neutral-5'],
    'tag-color-bg-light-neutral-active': token['neutral-17'],
    'tag-color-text-light-neutral': token['color-text-primary'],
    'tag-color-text-light-neutral-active': token['color-text-inverse'],
    /**
     * Dark Color
     */
    'tag-color-bg-dark-disabled': token['color-bg-on-disabled'],
    'tag-color-text-dark-disabled': token['color-text-disabled'],
    'tag-color-icon-dark': token['color-icon-inverse'],
    // Blue
    'tag-color-bg-dark-blue': token['blue-9'],
    'tag-color-bg-dark-blue-hover': token['blue-8'],
    'tag-color-bg-dark-blue-active': token['blue-6'],
    'tag-color-text-dark-blue': token['color-text-inverse'],
    // Green
    'tag-color-bg-dark-green': token['green-9'],
    'tag-color-bg--dark-greenhover': token['green-8'],
    'tag-color-bg-dark-green-active': token['green-6'],
    'tag-color-text-dark-green': token['color-text-inverse'],
    // Orange
    'tag-color-bg-dark-orange': token['orange-9'],
    'tag-color-bg-dark-orange-hover': token['orange-8'],
    'tag-color-bg-dark-orange-active': token['orange-6'],
    'tag-color-text-dark-orange': token['color-text-inverse'],
    // Amber
    'tag-color-bg-dark-amber': token['amber-9'],
    'tag-color-bg-dark-amber-hover': token['amber-8'],
    'tag-color-bg-dark-amber-active': token['amber-6'],
    'tag-color-text-dark-amber': token['color-text-inverse'],
    // Red
    'tag-color-bg-dark-red': token['red-9'],
    'tag-color-bg-dark-red-hover': token['red-8'],
    'tag-color-bg-dark-red-active': token['red-6'],
    'tag-color-text-dark-red': token['color-text-inverse'],
    // Pink
    'tag-color-bg-dark-pink': token['pinkish-red-9'],
    'tag-color-bg-dark-pink-hover': token['pinkish-red-8'],
    'tag-color-bg-dark-pink-active': token['pinkish-red-6'],
    'tag-color-text-dark-pink': token['color-text-inverse'],
    // Purple
    'tag-color-bg-dark-purple': token['purple-9'],
    'tag-color-bg-dark-purple-hover': token['purple-8'],
    'tag-color-bg-dark-purple-active': token['purple-6'],
    'tag-color-text-dark-purple': token['color-text-inverse'],
    // Cyan
    'tag-color-bg-dark-cyan': token['cyan-9'],
    'tag-color-bg-dark-cyan-hover': token['cyan-8'],
    'tag-color-bg-dark-cyan-active': token['cyan-6'],
    'tag-color-text-dark-cyan': token['color-text-inverse'],
    // Neutral
    'tag-color-bg-dark-neutral': token['neutral-23'],
    'tag-color-bg-dark-neutral-hover': token['neutral-19'],
    'tag-color-bg-dark-neutral-active': token['neutral-17'],
    'tag-color-text-dark-neutral': token['color-text-inverse'],
    'tag-color-text-dark-neutral-active': token['color-text-inverse'],
    /**
     * Add New Color
     */
    'tag-color-bg-add-new': token['color-bg-sunken'],
    'tag-color-bg-add-new-hover': token['color-bg-raised'],
    'tag-color-bg-add-new-focus': token['color-bg'],
    'tag-color-bg-add-new-disabled': token['neutral-2'],
    'tag-color-text-add-new': token['color-text-secondary'],
    'tag-color-text-add-new-focus': token['color-text-primary'],
    'tag-color-text-add-new-disabled': token['color-text-disabled'],
    'tag-color-border-add-new': token['color-border'],
    'tag-color-border-add-new-focus': token['color-primary'],
    'tag-color-icon-add-new': token['color-icon'],
    'tag-color-icon-add-new-disabled': token['color-icon-disabled'],
    /**
     * Font Size
     */
    'tag-font-size-small': token['font-size-body-small'],
    'tag-font-size-medium': token['font-size-body-small'],
    'tag-font-size-large': token['font-size-body-medium'],
    /**
     * Line Height
     */
    'tag-line-height-small': token['line-height-static-16'],
    'tag-line-height-medium': token['line-height-static-16'],
    'tag-line-height-large': token['line-height-static-20'],
    /**
     * Size
     */
    'tag-size-icon-small': token['size-2x'],
    'tag-size-icon-medium': token['size-2x'],
    'tag-size-icon-large': token['size-static-18'],
    /**
     * Spacing
     */
    'tag-gap-small': token['spacing-extra-tight'],
    'tag-gap-medium': token['spacing-slightly-tight'],
    'tag-gap-large': token['spacing-tight'],
    'tag-padding-v-small': token['spacing-extra-tight'],
    'tag-padding-h-small': token['spacing-tight'],
    'tag-padding-v-medium': token['spacing-slightly-tight'],
    'tag-padding-h-medium': token['spacing-base-tight'],
    'tag-padding-v-large': token['spacing-tight'],
    'tag-padding-h-large': token['spacing-base-tight'],
    /**
     * Border Radius
     */
    'tag-border-radius-small': 12,
    'tag-border-radius-medium': 14,
    'tag-border-radius-large': 18
  };
}