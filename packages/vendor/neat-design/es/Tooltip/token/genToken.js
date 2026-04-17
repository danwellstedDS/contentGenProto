/**
 * @file genToken.ts
 * @author pipi(peter.rao@derbysoft.net)
 */

// Statics
import { ladderColor } from '@derbysoft/neat-design-token';
import { applyHexOpacity } from "../../utils";

// Types

export default function genToken(token) {
  return {
    /**
     * Color
     */
    'tooltip-color-text-dark': token['color-text-inverse'],
    'tooltip-color-bg-dark': applyHexOpacity(ladderColor['neutral-28'], 90),
    'tooltip-color-text-light': token['color-text-primary'],
    'tooltip-color-bg-light': applyHexOpacity(ladderColor['neutral-0'], 90),
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
    'tooltip-gap': token['spacing-tight'],
    'tooltip-padding-v': token['spacing-tight'],
    'tooltip-padding-h': token['spacing-base-tight'],
    /**
     * Border Radius
     */
    'toolitp-border-radius': token['border-radius-base']
  };
}