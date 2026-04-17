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
    'tree-color-text': token['color-text-primary'],
    'tree-color-text-disabled': token['color-text-disabled'],
    'tree-color-icon': token['color-icon'],
    'tree-color-icon-secondary': token['color-icon-secondary'],
    'tree-color-icon-disabled': token['color-icon-disabled'],
    'tree-color-bg-hover': token['color-bg-hover'],
    'tree-color-border': token['color-border-divider'],
    /**
     * Font Size
     */
    'tree-font-size-small': token['font-size-body-small'],
    'tree-font-size-medium': token['font-size-body-medium'],
    'tree-font-size-large': token['font-size-body-large'],
    /**
     * Line Height
     */
    'tree-line-height-small': token['line-height-static-16'],
    'tree-line-height-medium': token['line-height-static-20'],
    'tree-line-height-large': token['line-height-static-24'],
    /**
     * Size
     */
    'tree-size-small': token['size-4x'],
    'tree-size-medium': token['size-5x'],
    'tree-size-large': token['size-6x'],
    'tree-size-fill-small': token['size-static-20'],
    'tree-size-fill-medium': token['size-3x'],
    'tree-size-fill-large': token['size-static-28'],
    'tree-size-icon-small': token['size-static-14'],
    'tree-size-icon-medium': token['size-2x'],
    'tree-size-icon-large': token['size-static-20'],
    /**
     * Spacing
     */
    'tree-gap': token['spacing-tight'],
    'tree-padding': token['spacing-tight'],
    /**
     * Border Radius
     */
    'tree-border-radius': token['border-radius-none']
  };
}