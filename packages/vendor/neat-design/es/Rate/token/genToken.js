/**
 * @file genToken.ts
 * @author pipi(peter.rao@derbysoft.net)
 */

// Statics
import { ladderColor } from '@derbysoft/neat-design-token';

// Types

export default function genToken(token) {
  return {
    /**
     * Color
     */
    'rate-color-default': ladderColor['neutral-5'],
    'rate-color-selected': ladderColor['amber-5'],
    'rate-color-normal': ladderColor['deep-orange-5'],
    'rate-color-positive': ladderColor['green-5'],
    'rate-color-negative': ladderColor['red-4'],
    'select-color-text': token['color-text-primary'],
    /**
     * Font Size
     */
    'rate-font-size-small': token['font-size-body-small'],
    'rate-font-size-medium': token['font-size-body-medium'],
    'rate-font-size-large': token['font-size-body-large'],
    /**
     * Size
     */
    'rate-size-small': token['size-static-18'],
    'rate-size-medium': token['size-3x'],
    'rate-size-large': token['size-4x'],
    /**
     * Spacing
     */
    'rate-gap': token['spacing-base'],
    'rate-padding': token['spacing-super-tight']
  };
}