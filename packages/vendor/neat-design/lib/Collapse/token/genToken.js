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
    'collapse-color-text': token['color-text-primary'],
    'collapse-color-text-additional': token['color-text-secondary'],
    'collapse-color-text-disabled': token['color-text-disabled'],
    'collapse-color-icon': token['color-icon'],
    'collapse-color-icon-disabled': token['color-icon-disabled'],
    'collapse-color-bg': token['color-bg'],
    'collapse-color-bg-hover': token['color-bg-hover'],
    'collapse-color-bg-press': token['aqua-1'],
    'collapse-color-bg-disabled': token['color-bg-disabled'],
    'collapse-color-bg-header': token['color-bg-sunken'],
    'collapse-color-border': token['color-border-divider'],
    /**
     * Font Size
     */
    'collapse-font-size-small': token['font-size-body-small'],
    'collapse-font-size-medium': token['font-size-body-medium'],
    'collapse-font-size-large': token['font-size-body-large'],
    /**
     * Line Height
     */
    'collapse-line-height-small': token['line-height-static-16'],
    'collapse-line-height-medium': token['line-height-static-20'],
    'collapse-line-height-large': token['line-height-static-24'],
    /**
     * Size
     */
    'collapse-size-icon-small': token['size-2x'],
    'collapse-size-icon-medium': token['size-static-20'],
    'collapse-size-icon-large': token['size-3x'],
    /**
     * Spacing
     */
    'collapse-gap-header-small': token['spacing-tight'],
    'collapse-gap-header-medium': token['spacing-base-tight'],
    'collapse-gap-header-large': token['spacing-base'],
    'collapse-padding-header-v-small': token['spacing-static-10'],
    'collapse-padding-header-v-medium': token['spacing-static-14'],
    'collapse-padding-header-v-large': token['spacing-base'],
    'collapse-padding-header-h-small': token['spacing-base'],
    'collapse-padding-header-h-medium': token['spacing-base-loose'],
    'collapse-padding-header-h-large': token['spacing-loose'],
    'collapse-padding-content-small': token['spacing-base'],
    'collapse-padding-content-medium': token['spacing-base-loose'],
    'collapse-padding-content-large': token['spacing-loose'],
    /**
     * Border Radius
     */
    'collaspe-border-radius': token['border-radius-base']
  };
}