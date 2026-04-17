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
    'menu-color-text': token['color-text-primary'],
    'menu-color-text-hover': token['color-primary'],
    'menu-color-text-active': token['color-primary'],
    'menu-color-text-focus': token['color-primary'],
    'menu-color-icon': token['color-icon-enhance'],
    'menu-color-icon-hover': token['color-primary'],
    'menu-color-icon-active': token['color-primary'],
    'menu-color-icon-focus': token['color-primary'],
    'menu-color-icon-dropdown': token['color-icon'],
    'menu-color-icon-dropdown-hover': token['color-primary'],
    'menu-color-icon-dropdown-active': token['color-primary'],
    'menu-color-icon-dropdown-focus': token['color-primary'],
    'menu-color-icon-collapse': token['color-icon-inverse'],
    'menu-color-icon-collapse-hover': token['color-icon-inverse'],
    'menu-color-divider': token['color-border-divider'],
    'menu-color-bg': token['color-bg'],
    'menu-color-bg-hover': token['color-bg-hover'],
    'menu-color-bg-active': token['color-bg-enhance'],
    'menu-color-bg-focus': token['color-bg'],
    'menu-color-bg-collapse': token['neutral-9'],
    'menu-color-bg-collapse-hover': token['color-primary'],
    /**
     * Font
     */
    'menu-fontsize': token['font-size-body-medium'],
    /**
     * Line Height
     */
    'menu-lineheight': token['line-height-static-16'],
    /**
     * Size
     */
    'menu-size-icon': token['size-static-20'],
    'menu-size-arrow': token['size-static-12'],
    'menu-size-v': 843,
    'menu-size-h-fold': token['size-8x'],
    'menu-size-h-expand': token['size-32x'],
    'menu-size-item': token['size-5x'],
    'menu-size-item-h-expand': 232,
    'menu-size-item-h-collapse': token['size-5x'],
    'menu-size-pill': token['size-3x'],
    /**
     * Spacing
     */
    'menu-padding-h': token['spacing-base-tight'],
    'menu-padding-v-top': token['spacing-tight'],
    'menu-v-bottom': token['spacing-loose'],
    'menu-padding-item': token['spacing-static-10'],
    'menu-padding-item-left-lv2': 52,
    'menu-padding-item-left-lv3': 68,
    'menu-padding-pill': token['spacing-tight'],
    'menu-padding-pill-move': token['spacing-base'],
    'menu-padding-popover': token['spacing-base-tight'],
    'menu-gap': token['spacing-tight'],
    'menu-gap-popover-distance': token['spacing-loose'],
    'menu-gap-item': 14,
    /**
     * Border Radius
     */
    'menu-item-radius': token['border-radius-base'],
    'menu-pill-radius': token['border-radius-circle']
  };
}