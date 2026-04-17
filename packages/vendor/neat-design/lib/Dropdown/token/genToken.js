"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = genToken;
/**
 * @file genToken.ts
 * @author pipi(peter.rao@derbysoft.net)
 */

// Types

function genToken(token) {
  return {
    /**
     * Color
     */
    'dropdown-color-text': token['color-text-primary'],
    'dropdown-color-text-active': token['color-primary'],
    'dropdown-color-text-disabled': token['color-text-disabled'],
    'dropdown-color-icon': token['color-icon'],
    'dropdown-color-icon-active': token['color-primary'],
    'dropdown-color-icon-disabled': token['color-icon-disabled'],
    'dropdown-color-bg': token['color-bg'],
    'dropdown-color-bg-hover': token['color-bg-hover'],
    'dropdown-color-bg-focus': token['color-bg-hover'],
    'dropdown-color-bg-active': token['color-bg'],
    'dropdown-color-bg-disabled': token['color-bg'],
    'dropdown-color-scroll-bg': token['color-bg-overlay'],
    'dropdown-color-border-divider': token['color-border-divider'],
    /**
     * Font Size
     */
    'dropdown-font-size': token['font-size-body-medium'],
    /**
     * Size
     */
    'dropdown-size': token['size-5x'],
    'dropdown-size-scroll': token['size-static-6'],
    /**
     * Spacing
     */
    'dropdown-gap': token['spacing-tight'],
    'dropdown-padding': token['spacing-tight'],
    'dropdown-padding-scroll': token['spacing-extra-tight'],
    'dropdown-padding-item-h': token['spacing-base-tight'],
    /**
     * Border Radius
     */
    'dropdown-border-radius': token['border-radius-base']
  };
}