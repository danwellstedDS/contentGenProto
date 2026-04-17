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
    'popover-color-text': token['color-text-primary'],
    'popover-color-bg': token['color-bg'],
    'popover-color-icon-info': token['color-info'],
    /**
     * Font Size
     */
    'popover-font-size': token['font-size-body-medium'],
    'popover-font-size-title': token['font-size-body-large'],
    /**
     * Line Height
     */
    'popover-line-height': token['line-height-static-20'],
    'popover-line-height-title': token['line-height-static-24'],
    /**
     * Size
     */
    'popover-size-icon': token['size-static-20'],
    /**
     * Spacing
     */
    'popover-gap': token['spacing-base'],
    'popover-gap-text': token['spacing-tight'],
    'popover-gap-action': token['spacing-loose'],
    'popover-padding-v': token['spacing-loose'],
    'popover-padding-h': token['spacing-loose'],
    /**
     * Border Radius
     */
    'popver-border-radius': token['border-radius-base']
  };
}