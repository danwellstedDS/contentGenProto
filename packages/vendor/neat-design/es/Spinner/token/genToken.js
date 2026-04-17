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
    'spinner-color-text': token['color-text-placeholder'],
    'spinner-color-icon': ladderColor['aqua-5'],
    'spinner-color-icon-success': token['color-positive'],
    'spinner-color-icon-error': token['color-text-negative'],
    'spinner-color-icon-black': token['color-primary'],
    'spinner-color-icon-inverse': token['color-bg'],
    /**
     * Font Size
     */
    'spinner-font-size-small': token['font-size-body-small'],
    'spinner-font-size-medium': token['font-size-body-medium'],
    'spinner-font-size-large': token['font-size-body-large'],
    /**
     * Size
     */
    'spinner-size-small': token['size-static-18'],
    'spinner-size-medium': token['size-4x'],
    'spinner-size-large': token['size-7x'],
    /**
     * Spacing
     */
    'spinner-gap-small': token['spacing-tight'],
    'spinner-gap-medium': token['spacing-base'],
    'spinner-gap-large': token['spacing-loose']
  };
}