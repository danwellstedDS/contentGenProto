/**
 * @file genScrollToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default function genScrollToken(token) {
  return {
    /**
     * Size
     */
    'scroll-size': token['size-static-6'],
    /**
     * Spacing
     */
    'scroll-padding': token['spacing-extra-tight'],
    /**
     * Border Radius
     */
    'scroll-border-radius': token['border-radius-circle']
  };
}