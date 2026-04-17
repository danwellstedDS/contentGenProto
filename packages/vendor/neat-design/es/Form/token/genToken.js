/**
 * @file genToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default function genToken(token) {
  return {
    /**
     * Font Size
     */
    'form-item-font-size-small': token['spacing-base-tight'],
    'form-item-font-size-medium': token['spacing-base-tight'],
    'form-item-font-size-large': token['spacing-static-14'],
    /**
     * Line Height
     */
    'form-item-line-height-small': "".concat(token['spacing-base'], "px"),
    'form-item-line-height-medium': "".concat(token['spacing-base'], "px"),
    'form-item-line-height-large': "".concat(token['spacing-base-loose'], "px"),
    /**
     * Size
     */
    'form-item-small': token['spacing-extra-loose'],
    'form-item-medium': token['spacing-super-loose'],
    'form-item-large': token['spacing-static-48'],
    /**
     * Spacing
     */
    'form-item-gap': token['spacing-slightly-tight'],
    'form-gap-v-small': token['spacing-tight'],
    'form-gap-v-medium': token['spacing-static-10'],
    'form-gap-v-large': token['spacing-base-tight'],
    'form-gap-h-small': token['spacing-extra-loose'],
    'form-gap-h-medium': token['spacing-super-loose'],
    'form-gap-h-large': token['spacing-static-48']
  };
}