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
    'divider-color-border': token['color-border-divider'],
    'divider-color-text': token['color-text-primary'],
    'divider-color-icon': token['color-icon'],
    /**
     * Font Size
     */
    'tooltip-font-size-medium': token['font-size-body-medium'],
    /**
     * Line Height
     */
    'tooltip-line-height-medium': token['line-height-static-20'],
    /**
     * Spacing
     */
    'divider-gap': token['spacing-base']
  };
}