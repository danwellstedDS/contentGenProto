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
    'modal-color-text': token['color-text-primary'],
    'modal-color-bg': token['color-bg'],
    'modal-color-border': token['color-border-divider'],
    'modal-color-icon-info': token['color-info'],
    'modal-color-icon-success': token['color-positive'],
    'modal-color-icon-warning': token['color-notice'],
    'modal-color-icon-error': token['color-negative'],
    /**
     * Font Size
     */
    'modal-font-size-title': token['font-size-header-4'],
    'modal-font-size': token['font-size-body-medium'],
    /**
     * Size
     */
    'modal-size': token['size-75x'],
    'modal-size-small-basic': token['size-50x'],
    'modal-size-medium-basic': token['size-75x'],
    'modal-size-large-basic': token['size-120x'],
    'modal-size-header': token['size-7x'],
    'modal-size-icon': token['size-3x'],
    /**
     * Spacing
     */
    'modal-gap': token['spacing-base'],
    'modal-padding': token['spacing-loose'],
    'modal-padding-header': token['spacing-tight'],
    'modal-padding-title': token['spacing-base'],
    /**
     * Border Radius
     */
    'modal-border-radius': token['border-radius-base']
  };
}