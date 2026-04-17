"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = genToken;
/**
 * @file genToken.ts
 * @author pipi(peter.rao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

function genToken(token) {
  return {
    /**
     * Color
     */
    'select-color-text': token['color-text-primary'],
    'select-color-text-secondary': token['color-text-secondary'],
    'select-color-text-placeholder': token['color-text-placeholder'],
    'select-color-text-disabled': token['color-text-disabled'],
    'select-color-text-danger': token[''],
    'select-color-icon': token['color-icon'],
    'select-color-icon-hover': token['color-primary'],
    'select-color-icon-disabled': token['color-icon-disabled'],
    'select-color-bg': token['color-bg'],
    'select-color-bg-hover': token['color-bg'],
    'select-color-bg-disabled': token['color-bg-disabled'],
    'select-color-bg-borderless': token['color-bg'],
    'select-color-bg-hover-borderless': token['color-bg'],
    'select-color-bg-focus-borderless': token['color-bg'],
    'select-color-bg-disabled-borderless': token['color-bg-disabled'],
    'select-color-border': token['color-border'],
    'select-color-border-hover': token['color-primary'],
    'select-color-border-disabled': token['color-border-disabled'],
    'select-color-border-danger': token['color-negative'],
    /**
     * Font Size
     */
    'select-font-size-small': token['font-size-body-medium'],
    'select-font-size-medium': token['font-size-body-medium'],
    'select-font-size-large': token['font-size-body-large'],
    /**
     * Line Height
     */
    'select-line-height-small': token['line-height-static-20'],
    'select-line-height-medium': token['line-height-static-20'],
    'select-line-height-large': token['line-height-static-24'],
    /**
     * Size
     */
    'select-size-small': token['size-4x'],
    'select-size-medium': token['size-5x'],
    'select-size-large': token['size-6x'],
    'select-size-icon-small': token['size-2x'],
    'select-size-icon-medium': token['size-static-20'],
    'select-size-icon-large': token['size-3x'],
    'input-size-close-btn-small': token['size-2x'],
    'input-size-close-btn-medium': token['size-2x'],
    'input-size-close-btn-large': token['size-static-18'],
    /**
     * Spacing
     */
    'select-gap': token['spacing-tight'],
    'select-padding-h': token['spacing-base-tight'],
    'select-padding-v-small': token['spacing-extra-tight'],
    'select-padding-v-medium': token['spacing-slightly-tight'],
    'select-padding-v-large': token['spacing-slightly-tight'],
    /**
     * Border Radius
     */
    'select-border-radius': token['border-radius-base']
  };
}