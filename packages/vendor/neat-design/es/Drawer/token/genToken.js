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
    'drawer-color-border': token['color-border-divider'],
    'drawer-color-text': token['color-text-primary'],
    'drawer-color-bg': token['color-bg'],
    /**
     * Font Size
     */
    'drawer-font-size-title': token['font-size-header-5'],
    'drawer-font-size': token['font-size-body-medium'],
    /**
     * Size
     */
    'drawer-size-small': token['size-40x'],
    'drawer-size-medium': token['size-75x'],
    'drawer-size-large': token['size-120x'],
    'drawer-size-close-btn': token['size-7x'],
    /**
     * Spacing
     */
    'drawer-padding': token['spacing-loose'],
    'drawer-gap-footer': token['spacing-base']
  };
}