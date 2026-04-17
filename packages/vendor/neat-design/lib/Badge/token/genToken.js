"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = genToken;
/**
 * @file genToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

function genToken(token) {
  return {
    /**
     * Color
     */
    'badge-color-text': token['color-text-primary'],
    'badge-color-text-inverse': token['color-text-inverse'],
    'badge-color-bg-primary': token['color-primary'],
    'badge-color-bg-default': token['color-primary-enhance'],
    'badge-color-bg-inverse': token['color-bg'],
    'badge-color-bg-important': token['color-negative'],
    'badge-color-bg-info': token['color-info'],
    'badge-color-bg-success': token['color-positive'],
    'badge-color-bg-warning': token['color-notice'],
    'badge-color-bg-red': token['red-5'],
    'badge-color-bg-deep-orange': token['deep-orange-5'],
    'badge-color-bg-orange': token['orange-5'],
    'badge-color-bg-amber': token['amber-5'],
    'badge-color-bg-yellow': token['yellow-5'],
    'badge-color-bg-green': token['green-5'],
    'badge-color-bg-teal': token['teal-5'],
    'badge-color-bg-cyan': token['cyan-5'],
    'badge-color-bg-blue': token['blue-5'],
    'badge-color-bg-deep-purple': token['deep-purple-5'],
    'badge-color-bg-purple': token['purple-5'],
    'badge-color-bg-pinkish-red': token['pinkish-red-5'],
    /**
     * Font Size
     */
    'badge-font-size-small': token['font-size-body-small'],
    'badge-font-size-medium': token['font-size-body-medium'],
    /**
     * Size
     */
    'badge-size-dot': token['size-static-6'],
    'badge-size-small': token['size-2x'],
    'badge-size-medium': token['size-static-20'],
    /**
     * Spacing
     */
    'badge-gap': token['spacing-tight'],
    'badge-padding-h-small': token['spacing-extra-tight'],
    'badge-padding-h-medium': token['spacing-slightly-tight'],
    /**
     * Border Radius
     */
    'badge-border-radius': token['border-radius-circle']
  };
}